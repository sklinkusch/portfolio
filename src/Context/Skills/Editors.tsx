import vscode from '../../images/Visual_Studio_Code_1.35_icon.png';
import brackets from '../../images/Brackets.png';

const editors = {
  title: 'Editors',
  content: [
    {
      name: 'Brackets',
      imageSrc: brackets,
      imageId: 'brackets',
      link: 'https://brackets.io/',
    },
    {
      name: 'VS Code',
      imageSrc: vscode,
      imageId: 'vscode',
      link: 'https://code.visualstudio.com/',
      imgStyles: {
        width: '190px',
      },
    },
  ],
};

export default editors;
