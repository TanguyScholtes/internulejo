const React = require( 'react' );
import ErrorMessage from './ErrorMessage.js';

function AddCompany ( props ) {
    return(
        <form id="add-company" className="add-company company-form" action="" method="">
            { Object.keys( props.errors ).length > 0 &&
                <ErrorMessage errors = { props.errors } />
            }
            <p>
                <label htmlFor="add-company-name">Nom de l'entreprise:</label>
                <input type="text" id="add-company-name" value={ props.company.name } name="add-company-name" placeholder="BeCode, etc…" onChange={ ( e ) => props.change( e ) } />
            </p>
            <p>
                <label htmlFor="add-company-website">Site web:</label>
                <input type="text" id="add-company-website" value={ props.company.website } name="add-company-website" placeholder="https://www.becode.org/" onChange={ ( e ) => props.change( e ) } />
            </p>
            <p>
                <label htmlFor="add-company-phone">Téléphone:</label>
                <input type="text" id="add-company-phone" value={ props.company.phone } name="add-company-phone" placeholder="+32 (0)4 999 99 99" onChange={ ( e ) => props.change( e ) } />
            </p>
            <p>
                <label htmlFor="add-company-email">Email:</label>
                <input type="email" id="add-company-email" value={ props.company.email } name="add-company-email" placeholder="info@becode.org" onChange={ ( e ) => props.change( e ) } />
            </p>
            <p>
                <label htmlFor="add-company-street">Rue et numéro:</label>
                <input type="text" id="add-company-street" value={ props.company.street } name="add-company-street" placeholder="Rue de Mulhouse 36, Cantersteen 10, etc…" onChange={ ( e ) => props.change( e ) } />
            </p>
            <p>
                <label htmlFor="add-company-zip">Code postal:</label>
                <input type="number" step="1" min="1000" max="9999" id="add-company-zip" name="add-company-zip" value={ props.company.zip } placeholder="4020, 1000, etc…" onChange={ ( e ) => props.change( e ) } />
            </p>
            <p>
                <label htmlFor="add-company-city">Ville:</label>
                <input type="text" id="add-company-city" name="add-company-city" value={ props.company.city } placeholder="Liège, Bruxelles, etc…" onChange={ ( e ) => props.change( e ) } />
            </p>
            <div>
                <label htmlFor="add-company-works">Réalisations:</label>
                <textarea id="add-company-works" name="add-company-works" value={ props.company.works } placeholder="Le type de sites qu'ils réalisent : des sites vitrines, corpo, des e-commerces, etc…" onChange={ ( e ) => props.change( e ) }></textarea>
            </div>
            <div>
                <label htmlFor="add-company-techs">Technologies utilisées:</label>
                <textarea id="add-company-techs" name="add-company-techs" value={ props.company.techs } placeholder="La ou les technos qu'ils utilisent : Wordpress, Laravel, React, etc…" onChange={ ( e ) => props.change( e ) }></textarea>
            </div>
            <div>
                <label htmlFor="add-company-notes">Notes supplémentaires:</label>
                <textarea id="add-company-notes" name="add-company-notes" value={ props.company.notes } placeholder="Une info de plus à donner ou un petit mot à ajouter ? C'est ici que ça se passe." onChange={ ( e ) => props.change( e ) }></textarea>
            </div>

            <button className="button" onClick={ ( e ) => props.save( e ) }>Ajouter</button>
        </form>
    );
}

export default AddCompany;
