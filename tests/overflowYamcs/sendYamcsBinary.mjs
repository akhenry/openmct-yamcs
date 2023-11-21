import { promises as fsPromises } from 'fs';

const IMAGE_PATH = './big_flower.jpg';

const YAMCS_HOST = 'http://localhost:8090';
const YAMCS_INSTANCE = 'myproject';
const YAMCS_PROCESSOR = 'realtime';
const PARAMETER_FQN = '/myproject/BigPicture';

async function sendImageToYamcs(imagePath) {
    try {
    // Read the image file and convert it to Base64
        const imageData = await fsPromises.readFile(imagePath);
        const base64Image = imageData.toString('base64');
        // Log the binary data size, just for reference
        console.debug(`🖼️ Image data size in bytes: ${imageData.length}`);

        // Setting the parameter via Yamcs REST API
        const endpointUrl = `${YAMCS_HOST}/api/processors/${YAMCS_INSTANCE}/${YAMCS_PROCESSOR}/parameters${PARAMETER_FQN}`;
        const requestBody = {
            type: 'BINARY',
            binaryValue: base64Image
        };

        console.debug(`📞 Sending data to ${endpointUrl}`);

        const response = await fetch(endpointUrl, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            throw new Error(`Error from YAMCS: ${response.statusText}`);
        }

        console.info('🎉 Parameter set successfully');
    } catch (error) {
        console.error('🚨 Error setting parameter:', error.message);
    }
}

sendImageToYamcs(IMAGE_PATH);
