import Drawer from "../Drawer"
import styles from "./style.module.scss"

const AdminDrawer = () => {
    return (
        <Drawer variant="permanent" anchor="left" minWidth={200} mr={80}>
            <h2 className={styles.logo}>Crypto Bazar</h2>
        </Drawer>
    )
}

export default AdminDrawer