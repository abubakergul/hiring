import { createContext, useState } from "react";
const ClientContext = createContext({
  interested: [],
  totalInterested: 0,
  addInt: (client) => {},
  removeInt: (clientId) => {},
  checkInt: (clientId) => {},
});
export const ClientContextProvider = (props) => {
  const [clients, setClients] = useState([]);
  const addIntHandler = (client) => {
    return setClients([client, ...clients]);
  };
  const removeIntHandler = (clientId) => {
    const removeClient = clients.filter((client) => client.id !== clientId);
    return setClients(removeClient);
  };
  const checkIntHandler = (clientId) => {
    return clients.some((client) => client.id === clientId);
  };
  const context = {
    interested: clients,
    totalInterested: clients.length,
    addInt: addIntHandler,
    removeInt: removeIntHandler,
    checkInt: checkIntHandler,
  };
  return (
    <ClientContext.Provider value={context}>
      {props.children}
    </ClientContext.Provider>
  );
};
export default ClientContext;
