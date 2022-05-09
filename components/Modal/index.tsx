import React, { useEffect, useRef, useState } from "react";
import styled from "styled.module.scss";

function Modal() {
	const [isBrowser, setIsBrowser] = useState(false);

	useEffect(() => {
		setIsBrowser(true);
	}, []);

	if (isBrowser) {
		return ReactDOM.createPortal(
			<div>Hello from modal</div>,
			document.getElementById("modal-root")
		);
	} else {
		return null;
	}

}

export default Modal;