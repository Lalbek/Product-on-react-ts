import React from "react";

export interface IRouter {
component:React.FunctionComponent<any>
path:string
isPublish:boolean
}