const pages = [
  {
    id: 'dasjlkdjalkduiqoewqipoe',
    slug: 'page-title',
    orgId: '1',
    parentId: null,
    header: {
      title: 'Prueba de pagina 1',
      description: 'Descripcion breve',
      image: '',
    },
    shared: {},
    createdAt: '2021-10-10T00:00:00.000Z',
    updatedAt: '2021-10-10T00:00:00.000Z',
    blocks: [
      { type: 'text', content: 'This is a text block' },
      { type: 'text', content: '' }
    ]
  },
  {
    id: 'dasjlkdjalkduiqoewqipoe',
    slug: 'page-title2',
    orgId: '1',
    parentId: null,
    header: {
      title: 'Prueba de pagina 2',
      description: 'Descripcion breve',
      image: '',
    },
    shared: {},
    createdAt: '2021-10-10T00:00:00.000Z',
    updatedAt: '2021-10-10T00:00:00.000Z',
    blocks: [
      { type: 'text', content: 'Pagina de ejemplo 2' },
      { type: 'text', content: '' }
    ]
  }
];


export const getPages = async (organizationId: string) => {
  return pages.filter(page => page.orgId === organizationId);
}

export const getPage = async (pageSlug: string) => {
  const page = pages.find(page => page.slug === pageSlug);
  if (!page) throw new Error('Page not found');
  return {
    ...page,
    createdAt: new Date(page.createdAt),
    updatedAt: new Date(page.updatedAt)
  };
}

export const updatePage = async (pageSlug: string, page: any) => {
  return page;
}