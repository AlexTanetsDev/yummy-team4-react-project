import styled from 'styled-components';

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 67px;
`;

export const FieldContainer = styled.div`
  position: relative;
  margin-bottom: 24px;

  // display: flex;
  // align-items: center;
  // margin-bottom: 24px;
  // padding-bottom: 18px;
  // border-bottom: 1px solid rgba(224, 224, 224, 1);
`;

export const InputTitle = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  padding-left: 140px;
  text-align: right;
  padding-bottom: 18px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  // flex: 3;
  // width: 100%;
  // text-align: right;
  // margin-bottom: 18px;

  font-size: 12px;
  line-height: 12px;
  color: #000000;
  // border: none;
  outline: none;

  &:invalid {
    border-bottom: 1px solid rgba(224, 224, 224, 1);
  }
`;

export const LabelTitle = styled.label`
  position: absolute;
  top: 0;
  left: 0;

  // display: block;
  // flex: 2;
  // margin-bottom: 18px;

  font-size: 14px;
  line-height: 21px;
  color: #000000;
  opacity: 0.5;
`;

export const InputDescription = styled.textarea`
  width: 100%;
  border: none;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  padding-left: 180px;
  text-align: right;
  padding-bottom: 18px;

  // flex: 3;
  // width: 100%;
  // text-align: right;

  font-size: 12px;
  line-height: 12px;
  color: #000000;
  // border: none;
  outline: none;

  // word-wrap: break-word;
  // word-break: break-all;
  // height: 100%;
  // max-height: 40px;
  resize: none;
`;

export const FieldSelectContainer = styled.div`
  // position: relative;
  margin-bottom: 24px;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  padding-bottom: 18px;
  // max-height: 50px;

  display: flex;
  justify-content: space-between;
  // align-items: center;
  // margin-bottom: 24px;
  // padding-bottom: 18px;
  // border-bottom: 1px solid rgba(224, 224, 224, 1);
`;

export const LabelCategory = styled.label`
  // position: absolute;
  // top: 0;
  // left: 0;

  // display: block;
  // flex: 2;
  // margin-bottom: 18px;

  font-size: 14px;
  line-height: 21px;
  color: #000000;
  opacity: 0.5;
`;

export const InputCategory = styled.select`
  // width: 100%;
  border: none;
  box-sizing: border-box;
  padding-right: 13px;
  // // border-bottom: 1px solid rgba(224, 224, 224, 1);
  // padding-left: 180px;
  // text-align: right;
  // padding-bottom: 18px;

  font-size: 12px;
  line-height: 12px;
  color: #000000;
  outline: none;
`;

export const OptionCategory = styled.option`
  color: rgba(0, 0, 0, 0.5);
  // background-color: rgb(230, 230, 230);
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
  width: 120px;
  height: 28px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  background-color: rgb(230, 230, 230);

  border-radius: 8px;
  cursor: pointer;

  box-shadow: 0px 2px 3px 0px rgba(62, 118, 120, 1);
  transition: transform 100ms ease-in-out;

  :hover {
    box-shadow: 1px 3px 3px 0px rgba(150, 150, 150, 1);
    transform: translate(-1px, -1px);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 280px;
  padding: 20px;
  margin: 0 auto;
  font-size: 16px;
  border: 1px solid rgb(222, 222, 222);
`;
