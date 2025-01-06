function downloadFile() {
  // Path to the gab file you want to allow users to download
  const filePath = 'SanexExecutor.zip';  // Replace with actual file path

  // Create an invisible link and trigger the download
  const link = document.createElement('a');
  link.href = filePath;
  link.download = 'SanexExecutor.zip';  // Set the default filename as 'gab'
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
