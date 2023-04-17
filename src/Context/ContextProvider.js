import PropTypes from 'prop-types';
import ContextApp from './ContextApp';
export default function ContextProvider({ children }) {

  return (
    <ContextApp.Provider>
      {children}
    </ContextApp.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
