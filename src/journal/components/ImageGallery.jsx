// journal/components/ImageGallery.jsx
import { ImageListItem, ImageList } from '@mui/material';

export const ImageGallery = ({ images }) => {
  return (
    <ImageList sx={{ width: '100%', height: 500 }} cols={4} rowHeight={200}>
      {images.map((image, index) => (
        <ImageListItem key={index}>
          <img
            src={`${image}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={`Imagen ${index + 1}`}
            loading="lazy"
            style={{ objectFit: 'contain', width: '100%', height: '100%' }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
