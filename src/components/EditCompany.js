const React = require( 'react' );
import ErrorMessage from './ErrorMessage.js';

function EditCompany ( props ) {
    return(
        <form id="edit-company" className="edit-company company-form" action="" method="">
            { Object.keys( props.errors ).length > 0 &&
                <ErrorMessage errors = { props.errors } />
            }
            <p>
                <label htmlFor="edit-company-name">Nom de l'entreprise:</label>
                <input type="text" id="edit-company-name" value={ props.company.name } name="edit-company-name" placeholder="BeCode, etc…" onChange={ ( e ) => props.change( e ) } />
            </p>
            <p>
                <label htmlFor="edit-company-website">Site web:</label>
                <input type="text" id="edit-company-website" value={ props.company.website } name="edit-company-website" placeholder="https://www.becode.org/" onChange={ ( e ) => props.change( e ) } />
            </p>
            <p>
                <label htmlFor="edit-company-phone">Téléphone:</label>
                <input type="text" id="edit-company-phone" value={ props.company.phone } name="edit-company-phone" placeholder="+32 (0)4 999 99 99" onChange={ ( e ) => props.change( e ) } />
            </p>
            <p>
                <label htmlFor="edit-company-email">Email:</label>
                <input type="email" id="edit-company-email" value={ props.company.email } name="edit-company-email" placeholder="info@becode.org" onChange={ ( e ) => props.change( e ) } />
            </p>
            <p>
                <label htmlFor="edit-company-street">Rue et numéro:</label>
                <input type="text" id="edit-company-street" value={ props.company.street } name="edit-company-street" placeholder="Rue de Mulhouse 36, Cantersteen 10, etc…" onChange={ ( e ) => props.change( e ) } />
            </p>
            <p>
                <label htmlFor="edit-company-zip">Code postal:</label>
                <input type="number" step="1" min="1000" max="9999" id="edit-company-zip" name="edit-company-zip" value={ props.company.zip } placeholder="4020, 1000, etc…" onChange={ ( e ) => props.change( e ) } />
            </p>
            <p>
                <label htmlFor="edit-company-city">Ville:</label>
                <input type="text" id="edit-company-city" name="edit-company-city" value={ props.company.city } placeholder="Liège, Bruxelles, etc…" onChange={ ( e ) => props.change( e ) } />
            </p>
            <div>
                <label htmlFor="edit-company-works">Réalisations:</label>
                <textarea id="edit-company-works" name="edit-company-works" value={ props.company.works } placeholder="Le type de sites qu'ils réalisent : des sites vitrines, corpo, des e-commerces, etc…" onChange={ ( e ) => props.change( e ) }></textarea>
            </div>
            <div>
                <label htmlFor="edit-company-techs">Technologies utilisées:</label>
                <textarea id="edit-company-techs" name="edit-company-techs" value={ props.company.techs } placeholder="La ou les technos qu'ils utilisent : Wordpress, Laravel, React, etc…" onChange={ ( e ) => props.change( e ) }></textarea>
            </div>
            <div>
                <label htmlFor="edit-company-notes">Notes supplémentaires:</label>
                <textarea id="edit-company-notes" name="edit-company-notes" value={ props.company.notes } placeholder="Une info de plus à donner ou un petit mot à ajouter ? C'est ici que ça se passe." onChange={ ( e ) => props.change( e ) }></textarea>
            </div>

            <button className="button" onClick={ ( e ) => props.edit( e ) }>Modifier</button>
            <a className="cancel-button" onClick={ ( e ) => props.toggle( e ) }>Annuler</a>
        </form>
    );
}

export default EditCompany;
