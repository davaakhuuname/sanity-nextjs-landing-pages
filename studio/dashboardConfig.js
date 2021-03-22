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
                  buildHookId: '60587377fc8a06b3d144c255',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-gfb4bxe3',
                  apiId: '49f3aee9-19b9-4221-a2ba-d00cf200facb'
                },
                {
                  buildHookId: '60587377eb1581177ab415b4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-6rm1zwpt',
                  apiId: '279e4872-831d-4e3c-9398-4d1aba3e5f51'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/davaakhuuname/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-6rm1zwpt.netlify.app', category: 'apps'}
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
