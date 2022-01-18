export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61e69a668189e7661c0caf08',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-jkozyhww',
                  apiId: 'c4bf1601-52df-49ea-86cc-27fb3b026e2d'
                },
                {
                  buildHookId: '61e69a678189e769470caca9',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-hpns5i81',
                  apiId: '578e59cb-7188-49a4-bd97-cd945630d906'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/YOWfactor/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-hpns5i81.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
