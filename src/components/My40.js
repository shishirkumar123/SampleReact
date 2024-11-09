import React from "react";

const ContextWithDefault = React.createContext('xyz')//If provider doesn't supply the value, 
                                                     //or there is no provider,
                                                     //default value will be used
const ProviderX = ContextWithDefault.Provider
const ConsumerWithDefault = ContextWithDefault.Consumer

export {ProviderX, ConsumerWithDefault} //Why this export is not default?
export default ContextWithDefault   //Another way of transferring params to deeper components