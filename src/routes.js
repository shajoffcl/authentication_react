import {
  SubModule,
  AdminHome,
  BankDetailReport,
  BankDetailApproval,
  AccountBlockDisputeList,
  UserBanksNameList,
  UserDocumnetList
} from "./views/index";

export const routes = [
  {
    path: "/admin",
    name: "Admin",
    exact: true,
    component: AdminHome,
  },
  {
    path: "/admin/admin_compliance",
    name: "Admin Compliance",
    exact: true,
    component: SubModule,
  },
  {
    path: "/admin/business_report",
    name: "Business Report",
    exact: true,
    component: SubModule,
  },
  {
    path: "/admin/admin_compliance/getBankDetailReport",
    name: "Bank Details Report",
    component: BankDetailReport,
  },
  {
    path: "/admin/admin_compliance/userDocumentList",
    name: "User Document List",
    component: UserDocumnetList,
  },
  {
    path: "/admin/admin_compliance/getBankInfoForApproval",
    name: "Bank Detail Approval",
    component: BankDetailApproval,
  },
  {
    path: "/admin/admin_compliance/getDisputeRaised",
    name: "Account Block Dispute List",
    component: AccountBlockDisputeList,
  },
  {
    path: "/admin/user",
    name: "Manage User",
    exact: true,
    component: SubModule,
  },
  {
    path: "/admin/user/bankNameIdShow",
    name: "Banks Name",
    component: UserBanksNameList,
  },
  {
    path: "/admin/cms",
    name: "Content Management System",
    exact: true,
    component: SubModule,
  },
  {
    path: "/admin/cms/contentApproval",
    name: "Content Approval System",
    exact: true,
    component: SubModule,
  },
  {
    path: "/admin/admin",
    name: "Data Panel",
    exact: true,
    component: SubModule,
  },
  {
    path: "/admin/email_marketing",
    name: "Email Marketting",
    exact: true,
    component: SubModule,
  },
  {
    path: "/admin/cms/emailTemplatesList",
    name: "Email Templates",
    exact: true,
    component: SubModule,
  },
  {
    path: "/admin/internal_data/index",
    name: "Internal Data",
    exact: true,
    component: SubModule,
  },
  {
    path: "/admin/leaderboard",
    name: "Leaderboard Panel",
    exact: true,
    component: SubModule,
  },
  {
    path: "/admin/manage_roles/getAdminIndex",
    name: "Manage Admin",
    exact: true,
    component: SubModule,
  },
  {
    path: "/admin/bonus_code",
    name: "Manage Bonus Code",
    exact: true,
    component: SubModule,
  },
  {
    path: "/admin/promotions",
    name: "Manage Promotions",
    exact: true,
    component: SubModule,
  },
  {
    path: "/admin/sms/index",
    name: "Marketing",
    exact: true,
    component: SubModule,
  },
  {
    path: "/admin/mis_report",
    name: "MIS Report",
    exact: true,
    component: SubModule,
  },
  {
    path: "/admin/operation_fin",
    name: "Operation Finance",
    exact: true,
    component: SubModule,
  },
  {
    path: "/admin/operation_tech",
    name: "Operation Technical",
    exact: true,
    component: SubModule,
  },
  {
    path: "/admin/partner/index",
    name: "Partners",
    exact: true,
    component: SubModule,
  },
  {
    path: "/admin/reactivation_panel",
    name: "Reactivation Panel",
    exact: true,
    component: SubModule,
  },
  {
    path: "/admin/ticket_system",
    name: "Ticket System",
    exact: true,
    component: SubModule,
  },
  {
    path: "/admin/tourney_calendar/index",
    name: "Tourney Calendar",
    exact: true,
    component: SubModule,
  },
  {
    path: "/admin/tourney_panel/index",
    name: "Tourney Panel",
    exact: true,
    component: SubModule,
  },
  
];
