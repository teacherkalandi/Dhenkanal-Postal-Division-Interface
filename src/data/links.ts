import { 
  Contact, 
  Code, 
  Wallet, 
  Building2, 
  Calendar, 
  Users, 
  Stamp, 
  CreditCard, 
  Truck, 
  MapPin, 
  Target, 
  BarChart3, 
  FileText, 
  Ruler, 
  Home, 
  Mail, 
  Briefcase, 
  Smartphone, 
  Globe, 
  Wrench, 
  HandCoins, 
  School, 
  UserSquare2, 
  Activity
} from 'lucide-react';

export interface LinkItem {
  title: string;
  url: string;
  icon: any;
  color: string;
}

export const links: LinkItem[] = [
  {
    title: "Contact Details of POs",
    url: "https://docs.google.com/spreadsheets/d/1lD_OAl_LyITjzM00a8KCdnqyA6uGEG4zGOTrYkpol98/edit?gid=0#gid=0",
    icon: Contact,
    color: "from-blue-600 to-blue-800"
  },
  {
    title: "LGD Codes",
    url: "https://docs.google.com/spreadsheets/d/1yqOOebGvo6R-jcoK1tFsi-nOvroyBkKSgKqCOOFEyzI/edit?gid=2119396737#gid=2119396737",
    icon: Code,
    color: "from-teal-600 to-teal-800"
  },
  {
    title: "Authorized Balance",
    url: "https://docs.google.com/spreadsheets/u/0/d/1Fv_q3Xh6TtCa2hXeOLzRTAUKS52r7Jnw6WlbCGe_3ks/edit",
    icon: Wallet,
    color: "from-red-600 to-red-800"
  },
  {
    title: "Office Details",
    url: "https://docs.google.com/spreadsheets/d/1zgrhHjW3_mbENbK5tQaH7K4kK8UNPgaI5PI0zd4AmSg/edit?usp=sharing",
    icon: Building2,
    color: "from-orange-600 to-orange-800"
  },
  {
    title: "Schedule Data",
    url: "https://docs.google.com/spreadsheets/d/1M0x6P5fyMbR2TWgeQnTxiTJw85cLT2JMd2xplg-kYWM/edit?usp=sharing",
    icon: Calendar,
    color: "from-purple-600 to-purple-800"
  },
  {
    title: "BNPL Customer data",
    url: "https://docs.google.com/spreadsheets/d/1vn6sGUOy2STwsFihUUjmdcww0IRZBpXiUMy_9JRgY-A/edit?usp=sharing",
    icon: Users,
    color: "from-emerald-600 to-emerald-800"
  },
  {
    title: "Philately Club Data",
    url: "https://docs.google.com/spreadsheets/u/0/d/1JeBXI8qf6d79ODMjv7240BzvaTCwwEGFJw7wMGP8dIo/edit",
    icon: Stamp,
    color: "from-sky-600 to-sky-800"
  },
  {
    title: "Philately Deposit Account",
    url: "https://docs.google.com/spreadsheets/d/1oBhZsmrEQudtnLwi6dacm1N_gdhA2AS6dbUEZ2C1190/edit?gid=0#gid=0",
    icon: CreditCard,
    color: "from-amber-600 to-amber-800"
  },
  {
    title: "Delivery Beat data",
    url: "https://docs.google.com/spreadsheets/d/1GZD-IuThsSmIWfnlcLCew_N8dbiEaelXknyPYxVd1bQ/edit?usp=sharing",
    icon: Truck,
    color: "from-slate-600 to-slate-800"
  },
  {
    title: "Route List/TD List",
    url: "https://docs.google.com/spreadsheets/d/1OPnzwrrMRdd1cuB1HxE5Ze10dn0pXF1lrhglFowGWdw/edit?usp=sharing",
    icon: MapPin,
    color: "from-orange-700 to-orange-900"
  },
  {
    title: "Target File",
    url: "https://drive.google.com/drive/folders/1o0Lt6DQj9QjCN5xHzGpjuwuKG8hMrli5?usp=sharing",
    icon: Target,
    color: "from-indigo-600 to-indigo-800"
  },
  {
    title: "Target Achievement File",
    url: "https://bdachievement-report.edgeone.app/",
    icon: BarChart3,
    color: "from-cyan-600 to-cyan-800"
  },
  {
    title: "Month Wise Report",
    url: "https://monthlyreports.edgeone.app/",
    icon: FileText,
    color: "from-rose-600 to-rose-800"
  },
  {
    title: "Distance Between Offices",
    url: "https://docs.google.com/spreadsheets/d/1CB8zM673ZXIn-wveWFZK9YEu0oXwQFjg_7tgP62sX2A/edit?gid=0#gid=0",
    icon: Ruler,
    color: "from-blue-400 to-blue-600"
  },
  {
    title: "Branch Office Accomodation",
    url: "https://docs.google.com/spreadsheets/d/1MnE0CH4FC-A_jk-YibcsS_izf8IvoiMR8bXzb9A7TNo/edit?usp=sharing",
    icon: Home,
    color: "from-lime-600 to-lime-800"
  },
  {
    title: "Mail Routes",
    url: "https://docs.google.com/spreadsheets/d/19NxbYF7WGyUxYkg6h1SJW9rwKI-hf_0dRjRPfr3bFLY/edit?usp=sharing",
    icon: Mail,
    color: "from-blue-500 to-blue-700"
  },
  {
    title: "Establishment Data PO Wise",
    url: "https://docs.google.com/spreadsheets/d/1YLwCdeybGsV5pZQ_SNy_U4zirrRQS7YANtZXY2-60WI/edit?usp=sharing",
    icon: Briefcase,
    color: "from-blue-900 to-slate-900"
  },
  {
    title: "APT 2.0",
    url: "https://drive.google.com/drive/folders/1GdhLDpX9H8aIy3CfssHq44SnVbcS1RqW?usp=drive_link",
    icon: Smartphone,
    color: "from-violet-600 to-violet-800"
  },
  {
    title: "BD Interface (Circle Office)",
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSGY-eyG1p1n_GGZwwjwKcIkdM2InpXJUm7ILPJumPAqGHZ4CdF7PROY7YPpbN1Kd3LQaZAXIgUyZWa/pubhtml?widget=true&headers=false",
    icon: Globe,
    color: "from-zinc-800 to-zinc-950"
  },
  {
    title: "PM Vishwakarma Toolkit (CO)",
    url: "https://docs.google.com/spreadsheets/d/1xGMkOpy1taSgXQBjeuL0Pr0aCKHdmYp_8o063MZQB_w/edit?gid=689362172#gid=689362172",
    icon: Wrench,
    color: "from-orange-500 to-orange-700"
  },
  {
    title: "PMEGP, Dhenkanal Division",
    url: "https://docs.google.com/spreadsheets/d/1ZbCyDd1P_y4lYXcUBp61-EMP2TXjD27ll3G6O7ps7T8/edit?usp=sharing",
    icon: HandCoins,
    color: "from-slate-700 to-slate-900"
  },
  {
    title: "eMail ID of Schools",
    url: "https://docs.google.com/spreadsheets/d/1fYSDvMk5Dd6Fn356CDwKIxuCOlB8i_sH/edit?usp=sharing&ouid=118417558873716219989&rtpof=true&sd=true",
    icon: School,
    color: "from-indigo-700 to-indigo-900"
  },
  {
    title: "Dept. Staff of HO/SO",
    url: "https://docs.google.com/spreadsheets/d/1fEsz6kkRxcAiUTcTrelWacU3gjG0Ye3kHDPkwYXP5DA/edit?usp=sharing",
    icon: UserSquare2,
    color: "from-yellow-500 to-pink-600"
  },
  {
    title: "RSBT Cell Report",
    url: "https://docs.google.com/spreadsheets/d/1QI5aQ-HHt0Xit-WfeWXVFeU_lOwQhw6g6S1D5Yp0xO8/edit?gid=0#gid=0",
    icon: Activity,
    color: "from-blue-500 to-blue-700"
  }
];
