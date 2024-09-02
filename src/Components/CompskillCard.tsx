/** @jsxImportSource theme-ui */

type Props = {
  skill: {
    imageSrc: string | undefined;
    name: string;
    imageId: string;
    link: string | undefined;
    imgStyles?: { [key: string]: string };
  };
};

const CompskillCard = (props: Props) => {
  const { imageSrc, name, imageId, link, imgStyles = {} } = props.skill;
  return (
    <div className="col-xs-6 col-md-4 col-lg-3" sx={{ mb: '8px' }}>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="album-item"
          sx={{
            height: '250px',
            border: '1px solid #dee2e6',
            borderRadius: '0.25rem',
            overflow: 'hidden',
            alignItems: 'center',
            justifyContent: 'space-between',
            display: 'flex',
            flexDirection: 'column',
            textDecoration: 'none',
            color: 'ggrey',
            '&:hover': { boxShadow: '2px 4px 8px rgba(0,0,0,0.6)', color: 'ggrey' },
          }}
        >
          <img
            src={imageSrc}
            alt={name}
            className="img-thumbnail"
            id={imageId}
            sx={{
              border: 'none !important',
              margin: 'auto',
              height: 'auto',
              display: 'block',
              maxHeight: '200px',
              maxWidth: 'calc(100% - 20px)',
              ...imgStyles,
            }}
          />
          <p>{name}</p>
        </a>
      ) : (
        <div
          className="album-item"
          sx={{
            height: '250px',
            border: '1px solid #dee2e6',
            borderRadius: '0.25rem',
            overflow: 'hidden',
            alignItems: 'center',
            justifyContent: 'space-between',
            display: 'flex',
            flexDirection: 'column',
            textDecoration: 'none',
            color: 'ggrey',
            '&:hover': { boxShadow: '2px 4px 8px rgba(0,0,0,0.6)', color: 'ggrey' },
          }}
        >
          <img
            src={imageSrc}
            alt={name}
            className="img-thumbnail"
            id={imageId}
            sx={{
              border: 'none !important',
              margin: 'auto',
              height: 'auto',
              display: 'block',
              maxHeight: '200px',
              maxWidth: 'calc(100% - 20px)',
              ...imgStyles,
            }}
          />
          <p>{name}</p>
        </div>
      )}
    </div>
  );
};

export default CompskillCard;
