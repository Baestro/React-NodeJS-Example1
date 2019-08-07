import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function CircularDeterminate(props) {
  const classes = props.classes;
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    function tick() {
      // reset when reaching 100%
      setProgress(oldProgress => (oldProgress >= 100 ? 0 : oldProgress + 1));
    }

    const timer = setInterval(tick, 20);
    return () => {
        console.log("clear");
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <CircularProgress className={classes.progress} variant="determinate" value={progress} />
    </div>
  );
//   return (
//     <div>
//       <CircularProgress className={classes.progress} variant="determinate" value={progress} />
//       <CircularProgress
//         className={classes.progress}
//         variant="determinate"
//         value={progress}
//         color="secondary"
//       />
//     </div>
//   );
}