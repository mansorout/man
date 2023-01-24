import { Grid } from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type IProps = {
	urlRedirect: string,
	urlApp: string
}

const InitializePaymentGateway = () => {

	const timerRef = useRef<any>(0);
	const [timer, setTimer] = useState<any>(5);

	const location = useLocation();
	const navigate = useNavigate();

	const urlRedirect = useMemo(() => { return location?.state?.urlRedirect }, [])
	const appUrl = useMemo(() => { return location?.state?.appUrl }, [])

	useEffect(() => {
		console.log(window.location.href, "window.location.href");
		// window.location.href = urlRedirect;
		// if (timer === -1) {
		// 	setTimer(5);
		// } else {
		// 	setTimer(0);
		// }
	}, [urlRedirect]);

	useEffect(() => {
		if (!timer) {
			clearTimeout(timerRef.current);
			// window.location.href = props?.urlApp;
			navigate(appUrl)
			return;
		};

		timerRef.current = setTimeout(() => {
			setTimer((p: any) => p - 1);
		}, timer);

	}, [timer])

	const redirectAppToMain = () => {


	}

	return (
		<Grid sx={{ width: "100%", height: "100%" }}>
			<iframe src={urlRedirect} width="100%" height="100vh">

			</iframe>
		</Grid>
	)

}

export default InitializePaymentGateway;