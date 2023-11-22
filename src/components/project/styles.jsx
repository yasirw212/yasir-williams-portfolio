import { tokens } from "../../theme"

const useStyles = () => {
   const colors = tokens

    return {
        projectContainer: {
            marginTop: '2rem',
            padding: {
                sm: '5rem 3rem'
            },
            display: 'flex',
            flexDirection: {
                xs: 'column',
                sm: 'row'
            },
            justifyContent: {
                sm: 'space-between'
            },
            alignItems: 'center'
        },
        span: {
            background: '#fff',
            width: '50px',
            height: '8px',
            display: {
                xs: 'none',
                 sm: 'block'
                }
        }
    }
}

export default useStyles