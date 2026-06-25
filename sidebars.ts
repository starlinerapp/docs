import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  userManualSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'doc',
        id: 'user-manual/getting-started/index',
      },
      items: [
        'user-manual/getting-started/deploy-your-first-application',
        'user-manual/getting-started/cloning-existing-environment',
        'user-manual/getting-started/preview-environments',
      ],
    },
  ],
  developerGuideSidebar: [
    {
      type: 'category',
      label: 'Developer Guide',
      link: {
        type: 'doc',
        id: 'developer-guide/index',
      },
      items: ['developer-guide/self-hosted-runners'],
    },
  ],
};

export default sidebars;
