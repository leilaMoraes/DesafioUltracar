import PropTypes from 'prop-types';
import AppContext from './AppContext';
export default function AppProvider({ children }) {

  return (
    <AppContext.Provider>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};