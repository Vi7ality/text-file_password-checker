import Dropzone from 'react-dropzone';
import styles from './UploadDropzone.module.scss';

interface UploadDropzoneProps {
  handleFileRead(file: File): void;
}

const UploadDropzone = ({ handleFileRead }: UploadDropzoneProps) => {
  return (
    <Dropzone onDrop={acceptedFiles => handleFileRead(acceptedFiles[0])}>
      {({ getRootProps, getInputProps }) => (
        <section className={styles.dropzone}>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        </section>
      )}
    </Dropzone>
  );
};

export default UploadDropzone;
