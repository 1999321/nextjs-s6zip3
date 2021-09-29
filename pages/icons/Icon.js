import * as React from 'react';
import styles from './iconComponent.module.css';
var Icons;
(function(Icons) {
  Icons['add'] = 'add';
})(Icons || (Icons = {}));
export const IconComponent = ({ name, ...rest }) => {
  const ImportedIconRef = React.useRef();
  const [loading, setLoading] = React.useState(true);
  const importIcon = React.useCallback(async () => {
    try {
      ImportedIconRef.current = (await import(`./icons/${
        Icons[name]
      }.svg`)).ReactComponent;
    } finally {
      setLoading(false);
    }
  }, [name]);
  React.useEffect(() => {
    setLoading(true);
    importIcon();
    return () => {
      setLoading(false);
    };
  }, [importIcon, name]);
  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    return React.createElement(ImportedIcon, {
      className: styles.root,
      ...rest
    });
  }
  return null;
};
