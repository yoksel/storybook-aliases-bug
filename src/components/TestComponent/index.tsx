import { nanoid } from 'nanoid';
import {testModule} from '../../util/testModule';
import { testModule as testModule2 } from '@/util/testModule';
import { testModule as testModule3 } from '@/testModule';

const TestComponent = ({id}:{id: string}) => {
  return (
    <>
      {/* To check that changing aliases at least works */}
      <div>
        <b>nanoid:</b> {id ?? nanoid()}
      </div>
      {/* Modules are imported different ways and I'm trying to mock them in storybook */}
      <div>
        <b>../../util/testModule:</b> {testModule()}
      </div>
      <div>
        <b>@/util/testModule:</b> {testModule2()}
      </div>
      <div>
        <b>@/testModule:</b> {testModule3()}
      </div>
    </>
  );
};

export default TestComponent;
