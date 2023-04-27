import { AuthenticationError } from "@/domain/errors"
import { AccessToken } from "@/domain/models"

export interface facebookAuthentication{
    perform: (params: facebookAuthentication.Params) => Promise <facebookAuthentication.Result>
}
namespace facebookAuthentication {
    export type Params =  {
    token: string
    }

    export type Result = AccessToken | AuthenticationError

}

