const organizations = [
  {
    id: "1",
    name: 'Secrets Kettu',
    members: [
      { id: '1', role: 'admin' },
    ],
    createdAt: '2021-10-10T00:00:00.000Z',
    updatedAt: '2021-10-10T00:00:00.000Z',
  }
]


export const getOrganizations = async (userId: string) => {
  // return organizations that the user is a member
  return organizations.filter(org => org.members.some(member => member.id === userId));
}

export const getOrganization = async (orgId: string) => {
  const org = organizations.find(org => org.id === orgId);
  if (!org) throw new Error('Organization not found');
  return orgToJSON(org);
}

const orgToJSON = (org: any) => {
  return {
    ...org,
    createdAt: new Date(org.createdAt),
    updatedAt: new Date(org.updatedAt)
  }
}
