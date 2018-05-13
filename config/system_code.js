var SystemCode={
    user:{
        role:{
            admin:1000,
            user:1
        },
        status:{
            inactive:0,
            active:1,
            removed:2 //equal to deleted
        },
        permission:{
            active:1,
            inactive:0
        }
    },
    property_owner:{
        status:{
            inactive:0,
            active:1,
            disabled:2,
            removed:3000
        }
    },
    message:{
        type:{
            outgoing:0,
            incoming:1
        }
    },


    statuscode:{
        success:1,
        fail:0
    },
    responsecode:{
        param_error:{
            code:300,
            msg:"Parameter is missing."
        },
        user_model_error:{
            code:301,
            msg:"The error caused by mongodb."
        },
        ok:{
            code:200,
            msg:"Successfully requested."
        },
        jwt_authen_error:{
            code:403,
            msg:"JWT token is broken."
        },
        no_user:{
            code:404,
            msg:"No User such that"
        }
    },    
    requestcode:{

    }
}

module.exports=SystemCode;