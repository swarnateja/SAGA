import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  buyMobile,
  getAllUsers,
  sellMobile
} from "../redux/actions/mobile-action";

const MobileDetails = ({
  buyMobile,
  sellMobile,
  numOfMobiles,
  users,
  getAllUsers
}) => {
  const Styles = {
    btn: {
      padding: 25,
      margin: 10,
      borderRadius: 10,
      border: 0
    }
  };

  return (
    <div>
      <h1>
        Number of Mobiles {numOfMobiles} and User {users.length}
      </h1>
      <button style={Styles.btn} onClick={() => buyMobile()}>
        Buy
      </button>
      <button style={Styles.btn} onClick={() => sellMobile()}>
        Sell
      </button>
      <button style={Styles.btn} onClick={() => sellMobile()}>
        Add User
      </button>
      <button style={Styles.btn} onClick={() => getAllUsers()}>
        Get All Users
      </button>
      <button style={Styles.btn} onClick={() => sellMobile()}>
        Edit
      </button>
      <button style={Styles.btn} onClick={() => sellMobile()}>
        Delete
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfMobiles: state.numOfMobiles,
    users: state.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      buyMobile,
      sellMobile,
      getAllUsers
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileDetails);
