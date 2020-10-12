import { css } from 'styled-components';
import Typography from '../Typography';
import { body, borderRadius, colors, transition } from '../../styles';

export default {
  main: css`
    position: relative;
    display: block;
    width: 100%;
    min-height: 54px;
    padding: 12px 18px;
    font-family: ${body.fontFamily};
    font-size: 18px;
    line-height: 1.6;
    color: ${colors.gray[1]};
    background: none;
    border: none;
    outline: none !important;
    transition: ${transition.all};
    -webkit-appearance: none;

    ::placeholder {
      color: ${colors.gray[3]};
      opacity: 1;
    }

    textarea& {
      min-height: 180px;
    }

    &[type='date']::-webkit-calendar-picker-indicator {
      width: 24px;
      opacity: 0;
    }
  `,
  Label: {
    main: css`
      ${Typography.variants.button};
      display: block;
      margin-bottom: 8px;
    `,
  },
  Wrapper: {
    main: css`
      & + & {
        margin-top: 16px;
      }
    `,
  },
  ErrorMessage: {
    main: css`
      display: flex;
      align-items: center;
      padding-top: 8px;
      font-family: ${body.fontFamily};
      font-size: 14px;
      color: ${colors.error};

      &::before {
        display: inline-block;
        width: 24px;
        height: 24px;
        margin-right: 8px;
        content: '';
        background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDdDMTEuNzM0OCA3IDExLjQ4MDQgNy4xMDUzNiAxMS4yOTI5IDcuMjkyODlDMTEuMTA1NCA3LjQ4MDQzIDExIDcuNzM0NzggMTEgOFYxMkMxMSAxMi4yNjUyIDExLjEwNTQgMTIuNTE5NiAxMS4yOTI5IDEyLjcwNzFDMTEuNDgwNCAxMi44OTQ2IDExLjczNDggMTMgMTIgMTNDMTIuMjY1MiAxMyAxMi41MTk2IDEyLjg5NDYgMTIuNzA3MSAxMi43MDcxQzEyLjg5NDYgMTIuNTE5NiAxMyAxMi4yNjUyIDEzIDEyVjhDMTMgNy43MzQ3OCAxMi44OTQ2IDcuNDgwNDMgMTIuNzA3MSA3LjI5Mjg5QzEyLjUxOTYgNy4xMDUzNiAxMi4yNjUyIDcgMTIgN1pNMTIuOTIgMTUuNjJDMTIuODk4MSAxNS41NTYzIDEyLjg2NzkgMTUuNDk1NyAxMi44MyAxNS40NEwxMi43MSAxNS4yOUMxMi41Njk0IDE1LjE1MTIgMTIuMzkwOCAxNS4wNTcyIDEyLjE5NjggMTUuMDE5OUMxMi4wMDI4IDE0Ljk4MjUgMTEuODAyMSAxNS4wMDM0IDExLjYyIDE1LjA4QzExLjQ5ODggMTUuMTMwNiAxMS4zODcyIDE1LjIwMTcgMTEuMjkgMTUuMjlDMTEuMTk3MyAxNS4zODM0IDExLjEyNCAxNS40OTQzIDExLjA3NDIgMTUuNjE2MUMxMS4wMjQ1IDE1LjczNzkgMTAuOTk5MiAxNS44Njg0IDExIDE2QzExLjAwMTYgMTYuMTMwNyAxMS4wMjg4IDE2LjI1OTggMTEuMDggMTYuMzhDMTEuMTI0OSAxNi41MDQxIDExLjE5NjYgMTYuNjE2OCAxMS4yODk5IDE2LjcxMDFDMTEuMzgzMiAxNi44MDM0IDExLjQ5NTkgMTYuODc1MSAxMS42MiAxNi45MkMxMS43Mzk3IDE2Ljk3MjkgMTEuODY5MSAxNy4wMDAyIDEyIDE3LjAwMDJDMTIuMTMwOSAxNy4wMDAyIDEyLjI2MDMgMTYuOTcyOSAxMi4zOCAxNi45MkMxMi41MDQxIDE2Ljg3NTEgMTIuNjE2OCAxNi44MDM0IDEyLjcxMDEgMTYuNzEwMUMxMi44MDM0IDE2LjYxNjggMTIuODc1MSAxNi41MDQxIDEyLjkyIDE2LjM4QzEyLjk3MTIgMTYuMjU5OCAxMi45OTg0IDE2LjEzMDcgMTMgMTZDMTMuMDA0OSAxNS45MzM0IDEzLjAwNDkgMTUuODY2NiAxMyAxNS44QzEyLjk4MjggMTUuNzM2MiAxMi45NTU4IDE1LjY3NTUgMTIuOTIgMTUuNjJaTTEyIDJDMTAuMDIyMiAyIDguMDg4NzkgMi41ODY0OSA2LjQ0NDMgMy42ODUzQzQuNzk5ODEgNC43ODQxMiAzLjUxODA5IDYuMzQ1OSAyLjc2MTIxIDguMTczMTdDMi4wMDQzMyAxMC4wMDA0IDEuODA2MyAxMi4wMTExIDIuMTkyMTUgMTMuOTUwOUMyLjU3OCAxNS44OTA3IDMuNTMwNDEgMTcuNjcyNSA0LjkyODk0IDE5LjA3MTFDNi4zMjc0NiAyMC40Njk2IDguMTA5MjkgMjEuNDIyIDEwLjA0OTEgMjEuODA3OUMxMS45ODg5IDIyLjE5MzcgMTMuOTk5NiAyMS45OTU3IDE1LjgyNjggMjEuMjM4OEMxNy42NTQxIDIwLjQ4MTkgMTkuMjE1OSAxOS4yMDAyIDIwLjMxNDcgMTcuNTU1N0MyMS40MTM1IDE1LjkxMTIgMjIgMTMuOTc3OCAyMiAxMkMyMiAxMC42ODY4IDIxLjc0MTMgOS4zODY0MiAyMS4yMzg4IDguMTczMTdDMjAuNzM2MyA2Ljk1OTkxIDE5Ljk5OTcgNS44NTc1MiAxOS4wNzExIDQuOTI4OTNDMTguMTQyNSA0LjAwMDM1IDE3LjA0MDEgMy4yNjM3NSAxNS44MjY4IDIuNzYxMkMxNC42MTM2IDIuMjU4NjYgMTMuMzEzMiAyIDEyIDJaTTEyIDIwQzEwLjQxNzggMjAgOC44NzEwNCAxOS41MzA4IDcuNTU1NDQgMTguNjUxOEM2LjIzOTg1IDE3Ljc3MjcgNS4yMTQ0NyAxNi41MjMzIDQuNjA4OTcgMTUuMDYxNUM0LjAwMzQ3IDEzLjU5OTcgMy44NDUwNCAxMS45OTExIDQuMTUzNzIgMTAuNDM5M0M0LjQ2MjQgOC44ODc0MyA1LjIyNDMzIDcuNDYxOTcgNi4zNDMxNSA2LjM0MzE1QzcuNDYxOTcgNS4yMjQzMyA4Ljg4NzQzIDQuNDYyNCAxMC40MzkzIDQuMTUzNzJDMTEuOTkxMSAzLjg0NTA0IDEzLjU5OTcgNC4wMDM0NiAxNS4wNjE1IDQuNjA4OTZDMTYuNTIzMyA1LjIxNDQ3IDE3Ljc3MjcgNi4yMzk4NCAxOC42NTE4IDcuNTU1NDRDMTkuNTMwOCA4Ljg3MTAzIDIwIDEwLjQxNzcgMjAgMTJDMjAgMTQuMTIxNyAxOS4xNTcyIDE2LjE1NjYgMTcuNjU2OSAxNy42NTY5QzE2LjE1NjYgMTkuMTU3MSAxNC4xMjE3IDIwIDEyIDIwWiIgZmlsbD0iI0VCNTc1NyIvPgo8L3N2Zz4K');
      }
    `,
  },
  InputWrapper: {
    main: css`
      position: relative;
      display: flex;
      align-items: stretch;
      border: 1px solid ${colors.gray[3]};
      border-radius: ${borderRadius.small}px;
      transition: ${transition.all};

      &::after {
        position: absolute;
        top: 16px;
        right: 18px;
        display: inline-block;
        width: 24px;
        height: 24px;
        pointer-events: none;
        content: '';
        background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4LjcwOTkgNy4yMUMxOC42MTcgNy4xMTYyNyAxOC41MDY0IDcuMDQxODggMTguMzg0NSA2Ljk5MTExQzE4LjI2MjcgNi45NDAzNCAxOC4xMzIgNi45MTQyIDE3Ljk5OTkgNi45MTQyQzE3Ljg2NzkgNi45MTQyIDE3LjczNzIgNi45NDAzNCAxNy42MTU0IDYuOTkxMTFDMTcuNDkzNSA3LjA0MTg4IDE3LjM4MjkgNy4xMTYyNyAxNy4yOSA3LjIxTDkuODM5OTUgMTQuNjdMNi43MDk5NSAxMS41M0M2LjYxMzQzIDExLjQzNjggNi40OTk0OSAxMS4zNjM0IDYuMzc0NjMgMTEuMzE0MkM2LjI0OTc4IDExLjI2NSA2LjExNjQ1IDExLjI0MDkgNS45ODIyNyAxMS4yNDMyQzUuODQ4MDkgMTEuMjQ1NiA1LjcxNTY4IDExLjI3NDMgNS41OTI2IDExLjMyNzhDNS40Njk1MyAxMS4zODEzIDUuMzU4MTkgMTEuNDU4NSA1LjI2NDk1IDExLjU1NUM1LjE3MTcxIDExLjY1MTUgNS4wOTg0IDExLjc2NTUgNS4wNDkxOSAxMS44OTAzQzQuOTk5OTkgMTIuMDE1MiA0Ljk3NTg2IDEyLjE0ODUgNC45NzgxOCAxMi4yODI3QzQuOTgwNSAxMi40MTY5IDUuMDA5MjMgMTIuNTQ5MyA1LjA2MjcyIDEyLjY3MjNDNS4xMTYyMiAxMi43OTU0IDUuMTkzNDMgMTIuOTA2OCA1LjI4OTk1IDEzTDkuMTI5OTUgMTYuODRDOS4yMjI5MSAxNi45MzM3IDkuMzMzNTEgMTcuMDA4MSA5LjQ1NTM3IDE3LjA1ODlDOS41NzcyMyAxNy4xMDk3IDkuNzA3OTQgMTcuMTM1OCA5LjgzOTk1IDE3LjEzNThDOS45NzE5NiAxNy4xMzU4IDEwLjEwMjcgMTcuMTA5NyAxMC4yMjQ1IDE3LjA1ODlDMTAuMzQ2NCAxNy4wMDgxIDEwLjQ1NyAxNi45MzM3IDEwLjU1IDE2Ljg0TDE4LjcwOTkgOC42OEMxOC44MTE1IDguNTg2MzYgMTguODkyNSA4LjQ3MjcgMTguOTQ3OSA4LjM0NjJDMTkuMDAzMyA4LjIxOTcxIDE5LjAzMTkgOC4wODMxIDE5LjAzMTkgNy45NDVDMTkuMDMxOSA3LjgwNjkgMTkuMDAzMyA3LjY3MDI5IDE4Ljk0NzkgNy41NDM3OUMxOC44OTI1IDcuNDE3MjkgMTguODExNSA3LjMwMzY0IDE4LjcwOTkgNy4yMVoiIGZpbGw9IiMyN0FFNjAiLz4KPC9zdmc+Cg==');
        opacity: 0;
        transition: ${transition.all};
      }

      .date &::after {
        position: absolute;
        top: 16px;
        right: 18px;
        display: block;
        width: 24px;
        height: 24px;
        padding: 0;
        color: rgba(0, 0, 0, 0);
        pointer-events: none;
        content: '';
        background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDE5QzEyLjE5NzggMTkgMTIuMzkxMSAxOC45NDE0IDEyLjU1NTYgMTguODMxNUMxMi43MiAxOC43MjE2IDEyLjg0ODIgMTguNTY1NCAxMi45MjM5IDE4LjM4MjdDMTIuOTk5NiAxOC4yIDEzLjAxOTQgMTcuOTk4OSAxMi45ODA4IDE3LjgwNDlDMTIuOTQyMiAxNy42MTA5IDEyLjg0NyAxNy40MzI3IDEyLjcwNzEgMTcuMjkyOUMxMi41NjczIDE3LjE1MyAxMi4zODkxIDE3LjA1NzggMTIuMTk1MSAxNy4wMTkyQzEyLjAwMTEgMTYuOTgwNiAxMS44IDE3LjAwMDQgMTEuNjE3MyAxNy4wNzYxQzExLjQzNDYgMTcuMTUxOCAxMS4yNzg0IDE3LjI4IDExLjE2ODUgMTcuNDQ0NEMxMS4wNTg2IDE3LjYwODkgMTEgMTcuODAyMiAxMSAxOEMxMSAxOC4yNjUyIDExLjEwNTQgMTguNTE5NiAxMS4yOTI5IDE4LjcwNzFDMTEuNDgwNCAxOC44OTQ2IDExLjczNDggMTkgMTIgMTlaTTE3IDE5QzE3LjE5NzggMTkgMTcuMzkxMSAxOC45NDE0IDE3LjU1NTYgMTguODMxNUMxNy43MiAxOC43MjE2IDE3Ljg0ODIgMTguNTY1NCAxNy45MjM5IDE4LjM4MjdDMTcuOTk5NiAxOC4yIDE4LjAxOTQgMTcuOTk4OSAxNy45ODA4IDE3LjgwNDlDMTcuOTQyMiAxNy42MTA5IDE3Ljg0NyAxNy40MzI3IDE3LjcwNzEgMTcuMjkyOUMxNy41NjczIDE3LjE1MyAxNy4zODkxIDE3LjA1NzggMTcuMTk1MSAxNy4wMTkyQzE3LjAwMTEgMTYuOTgwNiAxNi44IDE3LjAwMDQgMTYuNjE3MyAxNy4wNzYxQzE2LjQzNDYgMTcuMTUxOCAxNi4yNzg0IDE3LjI4IDE2LjE2ODUgMTcuNDQ0NEMxNi4wNTg2IDE3LjYwODkgMTYgMTcuODAyMiAxNiAxOEMxNiAxOC4yNjUyIDE2LjEwNTQgMTguNTE5NiAxNi4yOTI5IDE4LjcwNzFDMTYuNDgwNCAxOC44OTQ2IDE2LjczNDggMTkgMTcgMTlaTTE3IDE1QzE3LjE5NzggMTUgMTcuMzkxMSAxNC45NDE0IDE3LjU1NTYgMTQuODMxNUMxNy43MiAxNC43MjE2IDE3Ljg0ODIgMTQuNTY1NCAxNy45MjM5IDE0LjM4MjdDMTcuOTk5NiAxNC4yIDE4LjAxOTQgMTMuOTk4OSAxNy45ODA4IDEzLjgwNDlDMTcuOTQyMiAxMy42MTA5IDE3Ljg0NyAxMy40MzI3IDE3LjcwNzEgMTMuMjkyOUMxNy41NjczIDEzLjE1MyAxNy4zODkxIDEzLjA1NzggMTcuMTk1MSAxMy4wMTkyQzE3LjAwMTEgMTIuOTgwNiAxNi44IDEzLjAwMDQgMTYuNjE3MyAxMy4wNzYxQzE2LjQzNDYgMTMuMTUxOCAxNi4yNzg0IDEzLjI4IDE2LjE2ODUgMTMuNDQ0NEMxNi4wNTg2IDEzLjYwODkgMTYgMTMuODAyMiAxNiAxNEMxNiAxNC4yNjUyIDE2LjEwNTQgMTQuNTE5NiAxNi4yOTI5IDE0LjcwNzFDMTYuNDgwNCAxNC44OTQ2IDE2LjczNDggMTUgMTcgMTVaTTEyIDE1QzEyLjE5NzggMTUgMTIuMzkxMSAxNC45NDE0IDEyLjU1NTYgMTQuODMxNUMxMi43MiAxNC43MjE2IDEyLjg0ODIgMTQuNTY1NCAxMi45MjM5IDE0LjM4MjdDMTIuOTk5NiAxNC4yIDEzLjAxOTQgMTMuOTk4OSAxMi45ODA4IDEzLjgwNDlDMTIuOTQyMiAxMy42MTA5IDEyLjg0NyAxMy40MzI3IDEyLjcwNzEgMTMuMjkyOUMxMi41NjczIDEzLjE1MyAxMi4zODkxIDEzLjA1NzggMTIuMTk1MSAxMy4wMTkyQzEyLjAwMTEgMTIuOTgwNiAxMS44IDEzLjAwMDQgMTEuNjE3MyAxMy4wNzYxQzExLjQzNDYgMTMuMTUxOCAxMS4yNzg0IDEzLjI4IDExLjE2ODUgMTMuNDQ0NEMxMS4wNTg2IDEzLjYwODkgMTEgMTMuODAyMiAxMSAxNEMxMSAxNC4yNjUyIDExLjEwNTQgMTQuNTE5NiAxMS4yOTI5IDE0LjcwNzFDMTEuNDgwNCAxNC44OTQ2IDExLjczNDggMTUgMTIgMTVaTTE5IDNIMThWMkMxOCAxLjczNDc4IDE3Ljg5NDYgMS40ODA0MyAxNy43MDcxIDEuMjkyODlDMTcuNTE5NiAxLjEwNTM2IDE3LjI2NTIgMSAxNyAxQzE2LjczNDggMSAxNi40ODA0IDEuMTA1MzYgMTYuMjkyOSAxLjI5Mjg5QzE2LjEwNTQgMS40ODA0MyAxNiAxLjczNDc4IDE2IDJWM0g4VjJDOCAxLjczNDc4IDcuODk0NjQgMS40ODA0MyA3LjcwNzExIDEuMjkyODlDNy41MTk1NyAxLjEwNTM2IDcuMjY1MjIgMSA3IDFDNi43MzQ3OCAxIDYuNDgwNDMgMS4xMDUzNiA2LjI5Mjg5IDEuMjkyODlDNi4xMDUzNiAxLjQ4MDQzIDYgMS43MzQ3OCA2IDJWM0g1QzQuMjA0MzUgMyAzLjQ0MTI5IDMuMzE2MDcgMi44Nzg2OCAzLjg3ODY4QzIuMzE2MDcgNC40NDEyOSAyIDUuMjA0MzUgMiA2VjIwQzIgMjAuNzk1NiAyLjMxNjA3IDIxLjU1ODcgMi44Nzg2OCAyMi4xMjEzQzMuNDQxMjkgMjIuNjgzOSA0LjIwNDM1IDIzIDUgMjNIMTlDMTkuNzk1NiAyMyAyMC41NTg3IDIyLjY4MzkgMjEuMTIxMyAyMi4xMjEzQzIxLjY4MzkgMjEuNTU4NyAyMiAyMC43OTU2IDIyIDIwVjZDMjIgNS4yMDQzNSAyMS42ODM5IDQuNDQxMjkgMjEuMTIxMyAzLjg3ODY4QzIwLjU1ODcgMy4zMTYwNyAxOS43OTU2IDMgMTkgM1pNMjAgMjBDMjAgMjAuMjY1MiAxOS44OTQ2IDIwLjUxOTYgMTkuNzA3MSAyMC43MDcxQzE5LjUxOTYgMjAuODk0NiAxOS4yNjUyIDIxIDE5IDIxSDVDNC43MzQ3OCAyMSA0LjQ4MDQzIDIwLjg5NDYgNC4yOTI4OSAyMC43MDcxQzQuMTA1MzYgMjAuNTE5NiA0IDIwLjI2NTIgNCAyMFYxMUgyMFYyMFpNMjAgOUg0VjZDNCA1LjczNDc4IDQuMTA1MzYgNS40ODA0MyA0LjI5Mjg5IDUuMjkyODlDNC40ODA0MyA1LjEwNTM2IDQuNzM0NzggNSA1IDVINlY2QzYgNi4yNjUyMiA2LjEwNTM2IDYuNTE5NTcgNi4yOTI4OSA2LjcwNzExQzYuNDgwNDMgNi44OTQ2NCA2LjczNDc4IDcgNyA3QzcuMjY1MjIgNyA3LjUxOTU3IDYuODk0NjQgNy43MDcxMSA2LjcwNzExQzcuODk0NjQgNi41MTk1NyA4IDYuMjY1MjIgOCA2VjVIMTZWNkMxNiA2LjI2NTIyIDE2LjEwNTQgNi41MTk1NyAxNi4yOTI5IDYuNzA3MTFDMTYuNDgwNCA2Ljg5NDY0IDE2LjczNDggNyAxNyA3QzE3LjI2NTIgNyAxNy41MTk2IDYuODk0NjQgMTcuNzA3MSA2LjcwNzExQzE3Ljg5NDYgNi41MTk1NyAxOCA2LjI2NTIyIDE4IDZWNUgxOUMxOS4yNjUyIDUgMTkuNTE5NiA1LjEwNTM2IDE5LjcwNzEgNS4yOTI4OUMxOS44OTQ2IDUuNDgwNDMgMjAgNS43MzQ3OCAyMCA2VjlaTTcgMTVDNy4xOTc3OCAxNSA3LjM5MTEyIDE0Ljk0MTQgNy41NTU1NyAxNC44MzE1QzcuNzIwMDIgMTQuNzIxNiA3Ljg0ODE5IDE0LjU2NTQgNy45MjM4OCAxNC4zODI3QzcuOTk5NTcgMTQuMiA4LjAxOTM3IDEzLjk5ODkgNy45ODA3OSAxMy44MDQ5QzcuOTQyMiAxMy42MTA5IDcuODQ2OTYgMTMuNDMyNyA3LjcwNzExIDEzLjI5MjlDNy41NjcyNSAxMy4xNTMgNy4zODkwNyAxMy4wNTc4IDcuMTk1MDkgMTMuMDE5MkM3LjAwMTExIDEyLjk4MDYgNi44MDAwNCAxMy4wMDA0IDYuNjE3MzIgMTMuMDc2MUM2LjQzNDU5IDEzLjE1MTggNi4yNzg0MSAxMy4yOCA2LjE2ODUzIDEzLjQ0NDRDNi4wNTg2NSAxMy42MDg5IDYgMTMuODAyMiA2IDE0QzYgMTQuMjY1MiA2LjEwNTM2IDE0LjUxOTYgNi4yOTI4OSAxNC43MDcxQzYuNDgwNDMgMTQuODk0NiA2LjczNDc4IDE1IDcgMTVaTTcgMTlDNy4xOTc3OCAxOSA3LjM5MTEyIDE4Ljk0MTQgNy41NTU1NyAxOC44MzE1QzcuNzIwMDIgMTguNzIxNiA3Ljg0ODE5IDE4LjU2NTQgNy45MjM4OCAxOC4zODI3QzcuOTk5NTcgMTguMiA4LjAxOTM3IDE3Ljk5ODkgNy45ODA3OSAxNy44MDQ5QzcuOTQyMiAxNy42MTA5IDcuODQ2OTYgMTcuNDMyNyA3LjcwNzExIDE3LjI5MjlDNy41NjcyNSAxNy4xNTMgNy4zODkwNyAxNy4wNTc4IDcuMTk1MDkgMTcuMDE5MkM3LjAwMTExIDE2Ljk4MDYgNi44MDAwNCAxNy4wMDA0IDYuNjE3MzIgMTcuMDc2MUM2LjQzNDU5IDE3LjE1MTggNi4yNzg0MSAxNy4yOCA2LjE2ODUzIDE3LjQ0NDRDNi4wNTg2NSAxNy42MDg5IDYgMTcuODAyMiA2IDE4QzYgMTguMjY1MiA2LjEwNTM2IDE4LjUxOTYgNi4yOTI4OSAxOC43MDcxQzYuNDgwNDMgMTguODk0NiA2LjczNDc4IDE5IDcgMTlaIiBmaWxsPSIjNEYzRjQ0Ii8+Cjwvc3ZnPgo=');
        opacity: 1;
      }

      .success &::after {
        opacity: 1;
      }

      .focused & {
        border-color: ${colors.gray[1]};
      }

      .error & {
        border-color: ${colors.error};
      }

      .success & {
        border-color: ${colors.success};
      }
    `,
  },
};
