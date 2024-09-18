const localVideo = document.getElementById('localVideo');
const remoteVideo = document.getElementById('remoteVideo');
const startCallButton = document.getElementById('startCallButton');
const endCallButton = document.getElementById('endCallButton');
const imagePlaceholder = document.getElementById('imagePlaceholder');
let localStream = null;

startCallButton.addEventListener('click', async () => {
  try {
    localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    localVideo.srcObject = localStream;
    imagePlaceholder.style.display = 'none'; // Hide the image
    console.log('Camera started.');
  } catch (error) {
    console.error('Error accessing webcam:', error);
  }
});

endCallButton.addEventListener('click', () => {
  if (localStream) {
    localStream.getTracks().forEach(track => track.stop());
    localStream = null;
    imagePlaceholder.style.display = 'block'; // Show the image
    console.log('Call ended.');
  } else {
    console.log('Local stream not available.');
  }
});
