export const getSavedImageIds = () => {
      const savedImageIds = localStorage.getItem('saved_images')
        ? JSON.parse(localStorage.getItem('saved_images'))
        : [];
    
      return savedImageIds;
    };
    
    export const saveImageIds = (imageIdArr) => {
      if (imageIdArr.length) {
        localStorage.setItem('saved_images', JSON.stringify(imageIdArr));
      } else {
        localStorage.removeItem('saved_images');
      }
    };
    
    export const removeImageId = (imageId) => {
      const savedImageIds = localStorage.getItem('saved_images')
        ? JSON.parse(localStorage.getItem('saved_images'))
        : null;
    
      if (!savedImageIds) {
        return false;
      }
    
      const updatedSavedImageIds = savedImageIds?.filter((savedImageId) => savedImageId !== imageId);
      localStorage.setItem('saved_images', JSON.stringify(updatedSavedImageIds));
    
      return true;
    };
    