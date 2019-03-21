const React = require( 'react' );
import EditCompany from './EditCompany.js';

class ListItem extends React.Component {
    constructor ( props ) {
        super( props );

        this.state = {
            displayEditForm: false
        }
    }

    toggleEditionForm ( e ) {
        e.preventDefault();
        if( this.state.displayEditForm ) {
            this.setState( {
                displayEditForm: false
            } );
        } else {
            this.setState( {
                displayEditForm: true
            } );
        }
    }

    render () {
        if( this.state.displayEditForm ) {
            return(
                <li className="company">
                    <h2 className="company-name">
                        Modifier <a target="_blank" href={this.props.company.website}>{this.props.company.name}</a>
                    </h2>
                    <EditCompany
                        company = { this.props.company }
                        edit = { ( e ) => this.props.edit( e ) }
                        change = { ( e ) => this.props.change( e ) }
                        errors = { this.props.errors }
                        toggle = { ( e ) => this.toggleEditionForm( e ) }
                    />
                </li>
            );
        }

        return(
            <li className="company">
                <h2 className="company-name">
                    <a target="_blank" href={this.props.company.website}>{this.props.company.name}</a> <a className="edit-button" onClick={ ( e ) => this.toggleEditionForm( e ) }><span className="fas fa-pen"></span></a>
                </h2>
                <ul className="company-infos">
                    { this.props.company.phone &&
                        <li><span className="bold">Téléphone:</span> {this.props.company.phone}</li>
                    }
                    { this.props.company.email &&
                        <li><span className="bold">Email:</span> <a href={ "mailto:" + this.props.company.email }>{this.props.company.email}</a></li>
                    }
                    { this.props.company.street &&
                        <li>
                            <span className="bold">Adresse:</span> <a href={ "https://www.google.com/maps/search/?api=1&query=" + this.props.company.street.split(' ').join('+') + "%2C+" + this.props.company.zip + '+' + this.props.company.city }
                                target="_blank">{this.props.company.street}, {this.props.company.zip} <span className="uppercase">{this.props.company.city}</span></a>
                        </li>
                    }
                </ul>
                { this.props.company.works &&
                    <p className="company-texts"><span className="bold">Réalisations:</span> {this.props.company.works}</p>
                }
                { this.props.company.techs &&
                    <p className="company-texts"><span className="bold">Technologies:</span> {this.props.company.techs}</p>
                }
                { this.props.company.notes &&
                    <p className="company-texts"><span className="bold">Notes:</span> {this.props.company.notes}</p>
                }
            </li>
        );
    }
}

export default ListItem;
