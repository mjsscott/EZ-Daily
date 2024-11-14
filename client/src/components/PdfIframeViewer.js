function PdfIframeViewer({ pdfUrl }) {
  return (
    <iframe
      src={pdfUrl}
      title="CV PDF"
      style={{
        width: '100%',
        maxWidth: '450px',
        height: '400px',
        border: 'none',
        marginTop: '15px',
      }}
    />
  );
}

export default PdfIframeViewer;