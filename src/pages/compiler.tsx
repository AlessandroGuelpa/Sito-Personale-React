import { Navigate } from "react-router-dom";

export default function CompilerPage() {
  // Il compilatore è stato rimosso per alleggerire il bundle del sito.
  // Se questa rotta viene visitata, reindirizziamo in modo invisibile alla Home.
  return <Navigate to="/" replace />;
}