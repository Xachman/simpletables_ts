export class FileUtil {

	static saveUintArray(data: Uint8Array, filename: string) {
		var mimeType = "application/octet-stream";
		var blob = new Blob([data], {
			type: mimeType
		});
		var url = window.URL.createObjectURL(blob);
		this.downloadURL(filename, url);
		// setTimeout(() => {
		// 	return window.URL.revokeObjectURL(url);
		// }, 1000)	


	}

	static downloadURL(fileName: string, url) {
		var a;
		a = document.createElement('a');
		a.href = url;
		a.download = fileName;
		document.body.appendChild(a);
		a.style = 'display: none';
		a.click();
		a.remove();
	}
}
