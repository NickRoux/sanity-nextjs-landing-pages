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
                  buildHookId: '5da792dcfe57196d89b5a7bd',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-rrc2m6ge',
                  apiId: '7d63e32b-92d7-428c-8c7b-8ba4bae71bbe'
                },
                {
                  buildHookId: '5da792dc5803bc88b24b7b8b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-fygvt19r',
                  apiId: '04949dc6-8593-4ae5-9c66-0ded1b899ecc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/NickRoux/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-fygvt19r.netlify.com', category: 'apps'}
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
