import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Tooltip from '../../shared/Tooltip';
import { QuestionIcon } from '../../../icons';
import { yearGenerator, monthGenerator, dayGenerator } from '../../../helper';
import palette from '../../../palette';

const Container = styled.div`
  max-width: 400px;
  margin-top: 16px;
`;

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 36px;
`;

const SubTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 500;
`;

const Input = styled.input`
  font-size: 18px;
  padding: 8px;
  width: ${(props) => (props.fullWidth ? '100%' : '196px')};
  border: 1px solid ${palette.login.content.input.border};
  border-radius: 5px;

  &::placeholder {
    color: ${palette.login.content.input.placeholder};
  }
`;

const Field = styled.div`
  margin-bottom: 8px;
`;

const FieldTitle = styled.p`
  color: ${palette.login.content.fieldTitle};
  font-size: 16px;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 8px;
`;

const InlineContainer = styled.div`
  display: flex;

  & > ${Field}:first-child {
    margin-right: 8px;
  }
`;

const Form = styled.form``;

const Select = styled.select`
  width: ${(props) => (props.fullWidth ? '100%' : 'unset')};
  border: 1px solid ${palette.login.content.select.border};
  padding: 4px;
`;

const Option = styled.option``;

const RadioWrapper = styled.div`
  margin-left: 8px;
  margin-bottom: 16px;

  &:first-child {
    margin-left: 0;
  }
`;

const RadioInput = styled.input``;

const RadioLabel = styled.label`
  font-size: 18px;
`;

const CustomSexualContainer = styled.div`
  display: ${(props) => (props.open ? 'inherit' : 'none')};
`;

const HelperText = styled.p`
  margin: 8px 0;
  font-size: 12px;
  color: ${palette.login.content.helperText};
`;

const Button = styled.button`
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-shadow: 0 1px 2px ${palette.login.content.button.textShadow};
  background: linear-gradient(
    ${palette.login.content.button.background.top},
    ${palette.login.content.button.background.bottom}
  );
  border-width: 1px;
  border-style: solid;
  border-color: ${palette.login.content.button.border};
  border-radius: 5px;
  padding: 2px 24px;
  margin: 16px 0;
  width: 200px;
  box-shadow: inset 0 1px ${palette.login.content.button.boxShadow};

  &:hover {
    background: linear-gradient(
      ${palette.login.content.button.background.hover.top},
      ${palette.login.content.button.background.bottom}
    );
  }
`;

const StyledLink = styled(Link)`
  color: ${palette.login.content.link};
  text-decoration: none;
`;

const Piracy = styled.p`
  width: 316px;
  font-size: 12px;
  color: ${palette.login.content.piracy};
  margin: 8px 0 16px;
`;

const Fans = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 14px;
  color: ${palette.login.content.fans};
  margin: 16px 0 32px;
`;

const TooltipWrapper = styled.div`
  display: inline-block;
  margin-left: 16px;
`;

const Right = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [sexual, setSexual] = useState(0);
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');

  const handleFirstName = (event) => setFirstName(event.target.value);
  const handleLastName = (event) => setLastName(event.target.value);
  const handleSexual = (event) => setSexual(parseInt(event.target.value));
  const handleAccount = (event) => setAccount(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);

  return (
    <Container>
      <Title>註冊</Title>
      <SubTitle>快速又簡單。</SubTitle>
      <Form>
        <InlineContainer>
          <Field>
            <Input
              value={firstName}
              onChange={handleFirstName}
              placeholder="姓氏"
            />
          </Field>
          <Field>
            <Input
              value={lastName}
              onChange={handleLastName}
              placeholder="名字"
            />
          </Field>
        </InlineContainer>
        <Field>
          <Input
            fullWidth
            value={account}
            onChange={handleAccount}
            placeholder="手機號碼或電子郵件"
          />
        </Field>
        <Field>
          <Input
            fullWidth
            type="password"
            value={password}
            onChange={handlePassword}
            placeholder="設定密碼"
          />
        </Field>
        <FieldTitle>出生日期</FieldTitle>
        <Field>
          <Select>
            {yearGenerator().map((year) => (
              <Option key={year} value={year}>
                {year}
              </Option>
            ))}
          </Select>
          <Select>
            {monthGenerator().map((month) => (
              <Option key={month} value={month}>
                {month} 月
              </Option>
            ))}
          </Select>
          <Select>
            {dayGenerator().map((day) => (
              <Option key={day} value={day}>
                {day}
              </Option>
            ))}
          </Select>
          <TooltipWrapper>
            <Tooltip content="提供生日資料有助於確保你獲得符合年齡的適當 Facebook 體驗。如果你想要變更誰可以看到此內容，請前往你個人檔案的「關於」部分。如需更多詳情，請瀏覽資料政策。">
              <QuestionIcon />
            </Tooltip>
          </TooltipWrapper>
        </Field>
        <FieldTitle>性別</FieldTitle>
        <Field>
          <InlineContainer>
            <RadioWrapper>
              <RadioInput
                checked={sexual === 1}
                type="radio"
                value={1}
                onChange={handleSexual}
              />
              <RadioLabel>女性</RadioLabel>
            </RadioWrapper>
            <RadioWrapper>
              <RadioInput
                checked={sexual === 2}
                type="radio"
                value={2}
                onChange={handleSexual}
              />
              <RadioLabel>男性</RadioLabel>
            </RadioWrapper>
            <RadioWrapper>
              <RadioInput
                checked={sexual === 3}
                type="radio"
                value={3}
                onChange={handleSexual}
              />
              <RadioLabel>自訂</RadioLabel>
            </RadioWrapper>
            <TooltipWrapper>
              <Tooltip content="你可以稍後再變更哪些人能在你的個人檔案看到你的性別。 若要選擇其他性別或不想表明性別，請選擇「自訂」。">
                <QuestionIcon />
              </Tooltip>
            </TooltipWrapper>
          </InlineContainer>
          <CustomSexualContainer open={sexual === 3}>
            <Select fullWidth>
              <Option disabled value={0}>
                選擇人稱代名詞
              </Option>
              <Option value={1}>她：「祝她生日快樂」</Option>
              <Option value={2}>他：「祝他生日快樂」</Option>
              <Option value={3}>他們：「祝他們生日快樂」</Option>
            </Select>
            <HelperText>你的人稱代名詞會向所有人顯示。</HelperText>
            <Input fullWidth placeholder="性別（選填）" />
          </CustomSexualContainer>
        </Field>
        <Piracy>
          點擊「註冊」即表示你同意我們的
          <StyledLink to="/usage">使用條款</StyledLink>、
          <StyledLink to="/policy/data">資料政策</StyledLink>和{' '}
          <StyledLink to="/policy/cookie">Cookie 政策</StyledLink>
          。你可能會收到我們的簡訊通知，而且可以隨時選擇停止接收。
        </Piracy>
        <Button>註冊</Button>
        <Fans>
          為名人、團體或公司企業
          <StyledLink to="/fans/create">建立粉絲專頁</StyledLink>
        </Fans>
      </Form>
    </Container>
  );
};

export default Right;
