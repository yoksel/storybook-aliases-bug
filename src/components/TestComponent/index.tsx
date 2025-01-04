import { nanoid } from 'nanoid';
import {testModule} from '../../util/testModule';
import { testModule as testModule2 } from '@/src/util/testModule';
import { testModule as testModule3 } from '@/util/testModule';
import { testModule as testModule4 } from '@/testModule';

const TestComponent = () => {
  return (
    <>
      {/* To check that changing aliases at least works */}
      <div>
        <b>nanoid:</b> {nanoid()}
      </div>
      {/* Modules are imported different ways and I'm trying to mock them in storybook */}
      <div>
        <b>../../util/testModule:</b> {testModule()}
      </div>
      <div>
        <b>@/src/util/testModule:</b> {testModule2()}
      </div>
      <div>
        <b>@/util/testModule:</b> {testModule3()}
      </div>
      <div>
        <b>@/testModule:</b> {testModule4()}
      </div>
    </>
  );
};

export default TestComponent;
