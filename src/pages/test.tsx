import Sheet from 'react-modal-sheet';
import { useState } from 'react';
import MatzipListContainer from '../components/matziplist/AllMatzipList';

export default function Example() {
  const [isOpen, setOpen] = useState(true);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open sheet</button>

      <Sheet isOpen={isOpen} onClose={() => setOpen(false)}
      snapPoints={[600, 400, 100, 0]}
      initialSnap={2}
      onSnap={snapIndex =>
          console.log('> Current snap point index:', snapIndex)
        }>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content><MatzipListContainer/></Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop />
      </Sheet>
    </>
  );
}