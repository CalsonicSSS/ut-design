export const assetPathMode: string = 'PROD'; // DEV | PROD

// ---------------------------------------------------------------

export const pdfUrls = {
  pdf_implementation: 'https://cleverleylab.com/unite-toolkit/UNITE Transition Implementation Workbook.pdf',
  pdf_core: 'https://cleverleylab.com/unite-toolkit/UNITE Core Components Guidebook.pdf',
};

// --------------------------------------------------------------

export const downloadPDF = async (url: string) => {
  const res = await fetch(url);
  const blob = await res.blob();
  const blobUrl = window.URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = blobUrl;
  link.download = 'UNITE-Core-Components-Guidebook.pdf';
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.URL.revokeObjectURL(blobUrl);
};
