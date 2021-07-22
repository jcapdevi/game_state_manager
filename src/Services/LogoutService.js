import React, { useState, useEffect } from "react";
import Parse from "parse"
import { Redirect} from "react-router-dom"

const LogoutService = () => {
  const [flag, setFlag] = useState(false)


  Parse.User.logOut().then(() => {
      console.log('setting flag')
      setFlag(true)
    }
  )

  useEffect(() => {
    console.log('rendering')
    if (flag) {
      return (
        <div>
            <Redirect to="/auth" />
        </div>
      )
    }
  }, [flag]);

  return (
    <div></div>
  )
}

export default LogoutService
