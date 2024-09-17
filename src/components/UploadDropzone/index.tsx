import Dropzone from 'react-dropzone';
import styles from './UploadDropzone.module.scss';

interface UploadDropzoneProps {
  handleFileRead(file: File): void;
}

const UploadDropzone = ({ handleFileRead }: UploadDropzoneProps) => {
  return (
    <Dropzone
      onDrop={acceptedFiles => handleFileRead(acceptedFiles[0])}
      accept={{ 'text/plain': ['.txt'] }}
      maxFiles={1}
    >
      {({ getRootProps, getInputProps }) => (
        <section className={styles.dropzone}>
          <div {...getRootProps()}>
            <input {...getInputProps()} accept=".txt" />
            <p>Drag 'n' drop .txt file here, or click to select file</p>
          </div>
        </section>
      )}
    </Dropzone>
  );
};

export default UploadDropzone;
