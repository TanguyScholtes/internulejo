const React = require("react");
import List from "./List.js";
import SearchBar from "./SearchBar.js";
import AddCompany from "./AddCompany.js";
import axios from 'axios'
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      query: "",
      displayAddForm: false,
      errors: {
        website: "",
        email: ""
      },
      company: {
        name: "",
        website: "",
        phone: "",
        email: "",
        street: "",
        zip: 0,
        city: "",
        works: "",
        techs: "",
        notes: ""
      }
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:1337/companies")
      .then(results => {
        this.setState({
          companies: results.data
        });
      })
      .catch(err => {
        console.log("FCK OFF");
      });
    /* this.setState( {
            companies: [
                {
                    id: "1",
                    name: "Eyaka",
                    website: "https://eyaka.be/",
                    phone: "04 242 90 45",
                    email: "info@eyaka.be",
                    street: "Quai Mativa 23",
                    zip: 4020,
                    city: "Liège",
                    works: "réseaux sociaux, vitrines, E-commerces, référencement, audit, web app",
                    techs: "Wordpress, Prestashop, Drupal, Podio, Jira",
                    notes: ""
                },
                {
                    id: "2",
                    name: "Globule Bleu Liège",
                    website: "https://www.globulebleu.com/",
                    phone: "+32(0)4.239.84.44",
                    email: "start@globulebleu.com",
                    street: "Quai Mativa 62",
                    zip: 4020,
                    city: "Liège",
                    works: "corpo, vitrines, CMS, e-commerces, référencement, vidéos (animations), supports visuels (print, flyers, catalogues, affiches), imprimés textiles, identités graphiques",
                    techs: "Drupal, Flash, UX/UI, Adobe Creative Suite, HTML5, CSS3, responsive",
                    notes: "Aussi à Bruxelles"
                },
                {
                    id: "3",
                    name: "Globule Bleu Bruxelles",
                    website: "https://www.globulebleu.com/",
                    phone: "+32(0)4.239.84.44",
                    email: "start@globulebleu.com",
                    street: "Boulevard de l'humanité 237",
                    zip: 1620,
                    city: "Drogendbos",
                    works: "corpo, vitrines, CMS, e-commerces, référencement, vidéos (animations), supports visuels (print, flyers, catalogues, affiches), imprimés textiles, identités graphiques",
                    techs: "Drupal, Flash, UX/UI, Adobe Creative Suite, HTML5, CSS3, responsive",
                    notes: "Aussi à Liège"
                }
            ] 
        } );*/
  }

  toggleAddForm(e) {
    e.preventDefault();
    if (this.state.displayAddForm) {
      this.setState({
        displayAddForm: false,
        company: {
          name: "",
          website: "",
          phone: "",
          email: "",
          street: "",
          zip: 0,
          city: "",
          works: "",
          techs: "",
          notes: ""
        }
      });
    } else {
      this.setState({
        displayAddForm: true
      });
    }
  }

  handleSearchChange(e) {
    this.setState({
      query: e.target.value
    });
  }

  handleCompanyChange(e) {
    let property = e.target.name.split("-")[2];
    let value = e.target.value;
    let newErrors = this.state.errors;

    if (property === "website") {
      if (
        value !== "" &&
        !value.match(
          /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
        )
      ) {
        // Input value is not a valid URL
        newErrors.website = "Website is not a valid URL";
      } else {
        // URL is valid
        newErrors.website = "";
      }
      this.setState({ errors: newErrors });
    }

    if (property === "email") {
      if (
        value !== "" &&
        !value.match(
          /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g
        )
      ) {
        // Input value is not a valid email
        newErrors.email = "Email is not valid";
      } else {
        // Email is valid
        newErrors.email = "";
      }
      this.setState({ errors: newErrors });
    }

    let tempCompany = this.state.company;
    tempCompany[property] = value;
    this.setState({ company: tempCompany });
  }

  saveCompany(e) {
    e.preventDefault();
    console.log(this.state.company);

    if (
      !this.state.errors.email &&
      !this.state.errors.website &&
      this.state.company.website.length > 0 &&
      this.state.company.name.length > 0
    ) {
      // No Errors
      console.log("saveCompany", "No error!");
      //save company in DB
      //this.toggleAddForm( e );
    }
  }

  editCompany(e) {
    e.preventDefault();
    console.log(this.state.company);

    if (!this.state.errors.email && !this.state.errors.website) {
      // No Errors
      console.log("editCompany", "No error!");
      //update company in DB
      //this.toggleEditForm( e );
    }
  }

  render() {
    return (
      <div className="container">
        <nav className="menu">
          <a onClick={e => this.toggleAddForm(e)}>
            <span
              className={
                this.state.displayAddForm ? "fas fa-times" : "fas fa-plus"
              }
            />
            {this.state.displayAddForm
              ? " Fermer"
              : " Aidez-nous en agrandissant cette liste !"}
          </a>
        </nav>
        {this.state.displayAddForm && (
          <AddCompany
            change={e => this.handleCompanyChange(e)}
            save={e => this.saveCompany(e)}
            errors={this.state.errors}
            company={this.state.company}
          />
        )}

        <SearchBar change={e => this.handleSearchChange(e)} />
        <List
          change={e => this.handleCompanyChange(e)}
          errors={this.state.errors}
          edit={e => this.editCompany(e)}
          companies={this.state.companies.filter(company => {
            if (!this.state.query) {
              return true;
            }
            const query = this.state.query.toLowerCase();
            return [
              company.name,
              company.city,
              company.works,
              company.techs
            ].reduce(
              (acc, term) => acc || term.toLowerCase().indexOf(query) > -1,
              false
            );
          })}
        />
      </div>
    );
  }
}

export default App;
