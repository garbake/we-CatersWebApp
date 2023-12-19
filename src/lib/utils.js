const { randomBytes } = await import('node:crypto');
export const serializeNonPOJOs = (obj) => {
	return structuredClone(obj);
};

export const generateUsername = (name) => {
	const id = randomBytes(2).toString('hex');
	return `${name.slice(0, 8)}${id}`;
};

export const getImageURL = (collectionId, recordId, fileName, size = '0x0') => {
	return `http://127.0.0.1:8090/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`;
};


  

