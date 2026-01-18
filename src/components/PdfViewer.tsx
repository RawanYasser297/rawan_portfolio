import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Correct paths for 2026/v9+
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();


const PdfViewer = ({ fileUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  return (
    <div className='w-full h-48 object-cover'>
      <Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} width={380} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <div>
        <button
          disabled={pageNumber <= 1}
          onClick={() => setPageNumber(pageNumber - 1)}
        >
          Previous
        </button>
        <button
          disabled={pageNumber >= numPages}
          onClick={() => setPageNumber(pageNumber + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PdfViewer;
