import { ExternalLink } from "./ExternalLink";

import React from 'react';
import PageTitle from "./components/PageTitle";


export default function Links() {

    return (
        <div>
            <PageTitle title='Relevant external links' />
            <div style={{padding: '20px'}}>

                <ExternalLink 
                    title='Linkedin profile'
                    href='https://www.linkedin.com/in/nirinarabeson/'
                    linkname='linkedin.com/in/nirinarabeson/' />

                <ExternalLink 
                    title='Personnal repo' 
                    href='https://github.com/Seboran' 
                    linkname='github.com/Seboran' />

                <ExternalLink 
                    title='Instagram' 
                    href='https://www.instagram.com/nirinarabeson/' 
                    linkname='instagram.com/nirinarabeson'/>
                
                <ExternalLink 
                    title={'Centrale Marseille\'s visible files'} 
                    href='http://nirina.rabeson.perso.centrale-marseille.fr/visible/' 
                    linkname='nirina.rabeson.perso.centrale-marseille.fr/visible' />
            </div>
        </div>
    );
}