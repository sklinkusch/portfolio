import gdrive from "../../images/google-drive.png"
import dropbox from "../../images/Dropbox.png"
import owncloud from "../../images/OwnCloud.svg"

const filesharing = {
	title: "File Sharing",
	content: [
		{
			name: "Google Drive",
			imageSrc: gdrive,
			imageId: "gdrive",
			link: "https://workspace.google.com/products/drive/",
			imgStyles: {
				width: "200px",
			},
		},
		{
			name: "Dropbox",
			imageSrc: dropbox,
			imageId: "dropbox",
			link: "https://www.dropbox.com/",
			imgStyles: {
				width: "200px",
			},
		},
		{
			name: "OwnCloud",
			imageSrc: owncloud,
			imageId: "owncloud",
			link: "https://www.owncloud.com/",
			imgStyles: {
				width: "200px",
			},
		},
	],
}

export default filesharing
