type FileArr = Array<{ dataUrl: string; file: File } | null>;

export const readImageFiles = async (files: FileList | null, prevPreview: FileArr): Promise<FileArr> => {
  if (!files) return prevPreview;

  const promises = Array.from(files).map((file, index) => {
    return new Promise<{ dataUrl: string; file: File }>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        resolve({
          dataUrl: reader.result as string,
          file,
        });
      };
      reader.onerror = reject;
    });
  });

  const results = await Promise.all(promises);

  return [...prevPreview, ...results];
};
