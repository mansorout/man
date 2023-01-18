import { Grid, Modal } from '@mui/material';
import { Circles, TailSpin } from 'react-loader-spinner';
type IProps = {
  loadingStatus: boolean
}

const SprintMoneyLoader = (props: IProps) => {
  return (
    <Modal open={props?.loadingStatus }>
      <Grid container>
        <Grid item xs={12} sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh"
        }}>

          {/* <TailSpin */}
          <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            // radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </Grid>
      </Grid>
    </Modal>
  )
}

export default SprintMoneyLoader;