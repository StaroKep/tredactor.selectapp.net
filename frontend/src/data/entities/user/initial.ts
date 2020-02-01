import {UserStoreData} from "data/entities/user/types";
import {getUserEmail} from "src/services/LocalStorage/selectors";

const getInitialUserStoreData = (): UserStoreData => {
    return {
        email: getUserEmail(),
    }
};

export default getInitialUserStoreData;