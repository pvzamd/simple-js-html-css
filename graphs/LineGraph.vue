<script setup>
import { reactive } from 'vue'

const state = reactive([
  {
    "date": "Mon Feb 24 2020",
    "value": "30.8476"
  },
  {
    "date": "Tue Feb 25 2020",
    "value": "30.6523"
  },
  {
    "date": "Wed Feb 26 2020",
    "value": "30.5014"
  },
  {
    "date": "Thu Feb 27 2020",
    "value": "30.4071"
  },
  {
    "date": "Fri Feb 28 2020",
    "value": "29.6972"
  },
  {
    "date": "Mon Mar 02 2020",
    "value": "29.326"
  },
  {
    "date": "Tue Mar 03 2020",
    "value": "29.7584"
  },
  {
    "date": "Wed Mar 04 2020",
    "value": "29.3786"
  },
  {
    "date": "Thu Mar 05 2020",
    "value": "29.6321"
  },
  {
    "date": "Fri Mar 06 2020",
    "value": "29.0335"
  },
  {
    "date": "Mon Mar 09 2020",
    "value": "28.112"
  },
  {
    "date": "Wed Mar 11 2020",
    "value": "27.768"
  },
  {
    "date": "Thu Mar 12 2020",
    "value": "26.0423"
  },
  {
    "date": "Fri Mar 13 2020",
    "value": "26.7647"
  },
  {
    "date": "Mon Mar 16 2020",
    "value": "25.0731"
  },
  {
    "date": "Tue Mar 17 2020",
    "value": "24.4157"
  },
  {
    "date": "Wed Mar 18 2020",
    "value": "22.8223"
  },
  {
    "date": "Thu Mar 19 2020",
    "value": "21.5401"
  },
  {
    "date": "Fri Mar 20 2020",
    "value": "22.8809"
  },
  {
    "date": "Mon Mar 23 2020",
    "value": "19.6248"
  },
  {
    "date": "Tue Mar 24 2020",
    "value": "19.698"
  },
  {
    "date": "Wed Mar 25 2020",
    "value": "20.2957"
  },
  {
    "date": "Thu Mar 26 2020",
    "value": "21.1583"
  },
  {
    "date": "Fri Mar 27 2020",
    "value": "20.9433"
  },
  {
    "date": "Mon Mar 30 2020",
    "value": "20.129"
  },
  {
    "date": "Tue Mar 31 2020",
    "value": "20.7479"
  },
  {
    "date": "Wed Apr 01 2020",
    "value": "20.1611"
  },
  {
    "date": "Fri Apr 03 2020",
    "value": "19.6403"
  },
  {
    "date": "Tue Apr 07 2020",
    "value": "20.3629"
  },
  {
    "date": "Wed Apr 08 2020",
    "value": "20.6171"
  },
  {
    "date": "Thu Apr 09 2020",
    "value": "21.6476"
  },
  {
    "date": "Mon Apr 13 2020",
    "value": "20.8882"
  },
  {
    "date": "Wed Apr 15 2020",
    "value": "20.966"
  },
  {
    "date": "Thu Apr 16 2020",
    "value": "21.1565"
  },
  {
    "date": "Fri Apr 17 2020",
    "value": "21.807"
  },
  {
    "date": "Mon Apr 20 2020",
    "value": "21.579"
  },
  {
    "date": "Tue Apr 21 2020",
    "value": "21.0462"
  },
  {
    "date": "Wed Apr 22 2020",
    "value": "21.1122"
  },
  {
    "date": "Thu Apr 23 2020",
    "value": "21.2482"
  },
  {
    "date": "Fri Apr 24 2020",
    "value": "20.5895"
  },
  {
    "date": "Mon Apr 27 2020",
    "value": "20.8537"
  },
  {
    "date": "Tue Apr 28 2020",
    "value": "21.2513"
  },
  {
    "date": "Wed Apr 29 2020",
    "value": "21.7037"
  },
  {
    "date": "Thu Apr 30 2020",
    "value": "22.2547"
  },
  {
    "date": "Mon May 04 2020",
    "value": "21.1489"
  },
  {
    "date": "Tue May 05 2020",
    "value": "20.837"
  },
  {
    "date": "Wed May 06 2020",
    "value": "20.9649"
  },
  {
    "date": "Thu May 07 2020",
    "value": "20.8255"
  },
  {
    "date": "Fri May 08 2020",
    "value": "20.7622"
  },
  {
    "date": "Mon May 11 2020",
    "value": "20.9602"
  },
  {
    "date": "Tue May 12 2020",
    "value": "20.8383"
  },
  {
    "date": "Wed May 13 2020",
    "value": "21.2512"
  },
  {
    "date": "Thu May 14 2020",
    "value": "21.2082"
  },
  {
    "date": "Fri May 15 2020",
    "value": "21.1998"
  },
  {
    "date": "Mon May 18 2020",
    "value": "20.4673"
  },
  {
    "date": "Tue May 19 2020",
    "value": "20.3901"
  },
  {
    "date": "Wed May 20 2020",
    "value": "20.9163"
  },
  {
    "date": "Thu May 21 2020",
    "value": "21.007"
  },
  {
    "date": "Fri May 22 2020",
    "value": "20.9217"
  },
  {
    "date": "Tue May 26 2020",
    "value": "21.0138"
  },
  {
    "date": "Wed May 27 2020",
    "value": "21.076"
  },
  {
    "date": "Thu May 28 2020",
    "value": "21.3456"
  },
  {
    "date": "Fri May 29 2020",
    "value": "21.5537"
  },
  {
    "date": "Mon Jun 01 2020",
    "value": "22.2276"
  },
  {
    "date": "Tue Jun 02 2020",
    "value": "22.5715"
  },
  {
    "date": "Wed Jun 03 2020",
    "value": "22.6501"
  },
  {
    "date": "Thu Jun 04 2020",
    "value": "22.464"
  },
  {
    "date": "Fri Jun 05 2020",
    "value": "22.7348"
  },
  {
    "date": "Mon Jun 08 2020",
    "value": "22.6724"
  },
  {
    "date": "Tue Jun 09 2020",
    "value": "22.5673"
  },
  {
    "date": "Wed Jun 10 2020",
    "value": "22.9584"
  },
  {
    "date": "Thu Jun 11 2020",
    "value": "22.6953"
  },
  {
    "date": "Fri Jun 12 2020",
    "value": "22.7431"
  },
  {
    "date": "Mon Jun 15 2020",
    "value": "22.5033"
  },
  {
    "date": "Tue Jun 16 2020",
    "value": "22.6887"
  },
  {
    "date": "Wed Jun 17 2020",
    "value": "22.7787"
  },
  {
    "date": "Thu Jun 18 2020",
    "value": "22.9777"
  },
  {
    "date": "Fri Jun 19 2020",
    "value": "23.0944"
  },
  {
    "date": "Mon Jun 22 2020",
    "value": "23.2669"
  },
  {
    "date": "Tue Jun 23 2020",
    "value": "23.5425"
  },
  {
    "date": "Wed Jun 24 2020",
    "value": "23.5212"
  },
  {
    "date": "Thu Jun 25 2020",
    "value": "23.7587"
  },
  {
    "date": "Fri Jun 26 2020",
    "value": "23.7949"
  },
  {
    "date": "Mon Jun 29 2020",
    "value": "23.5126"
  },
  {
    "date": "Tue Jun 30 2020",
    "value": "23.5523"
  },
  {
    "date": "Wed Jul 01 2020",
    "value": "23.5542"
  },
  {
    "date": "Thu Jul 02 2020",
    "value": "23.634"
  },
  {
    "date": "Fri Jul 03 2020",
    "value": "23.6252"
  },
  {
    "date": "Mon Jul 06 2020",
    "value": "23.9947"
  },
  {
    "date": "Tue Jul 07 2020",
    "value": "24.2009"
  },
  {
    "date": "Wed Jul 08 2020",
    "value": "24.0433"
  },
  {
    "date": "Thu Jul 09 2020",
    "value": "24.307"
  },
  {
    "date": "Fri Jul 10 2020",
    "value": "24.2801"
  },
  {
    "date": "Mon Jul 13 2020",
    "value": "24.1594"
  },
  {
    "date": "Tue Jul 14 2020",
    "value": "23.9416"
  },
  {
    "date": "Wed Jul 15 2020",
    "value": "23.9035"
  },
  {
    "date": "Thu Jul 16 2020",
    "value": "24.1017"
  },
  {
    "date": "Fri Jul 17 2020",
    "value": "24.302"
  },
  {
    "date": "Mon Jul 20 2020",
    "value": "24.5076"
  },
  {
    "date": "Tue Jul 21 2020",
    "value": "24.4562"
  },
  {
    "date": "Wed Jul 22 2020",
    "value": "24.4197"
  },
  {
    "date": "Thu Jul 23 2020",
    "value": "24.7437"
  },
  {
    "date": "Fri Jul 24 2020",
    "value": "24.6677"
  },
  {
    "date": "Mon Jul 27 2020",
    "value": "24.4074"
  },
  {
    "date": "Tue Jul 28 2020",
    "value": "24.4856"
  },
  {
    "date": "Wed Jul 29 2020",
    "value": "24.5229"
  },
  {
    "date": "Thu Jul 30 2020",
    "value": "24.3357"
  },
  {
    "date": "Fri Jul 31 2020",
    "value": "24.604"
  },
  {
    "date": "Mon Aug 03 2020",
    "value": "24.734"
  },
  {
    "date": "Tue Aug 04 2020",
    "value": "24.9428"
  },
  {
    "date": "Wed Aug 05 2020",
    "value": "25.24"
  },
  {
    "date": "Thu Aug 06 2020",
    "value": "25.6255"
  },
  {
    "date": "Fri Aug 07 2020",
    "value": "25.5974"
  },
  {
    "date": "Mon Aug 10 2020",
    "value": "25.8542"
  },
  {
    "date": "Tue Aug 11 2020",
    "value": "25.7142"
  },
  {
    "date": "Wed Aug 12 2020",
    "value": "25.5852"
  },
  {
    "date": "Thu Aug 13 2020",
    "value": "25.7079"
  },
  {
    "date": "Fri Aug 14 2020",
    "value": "25.579"
  },
  {
    "date": "Mon Aug 17 2020",
    "value": "25.6532"
  },
  {
    "date": "Tue Aug 18 2020",
    "value": "26.0875"
  },
  {
    "date": "Wed Aug 19 2020",
    "value": "26.2785"
  },
  {
    "date": "Thu Aug 20 2020",
    "value": "26.3979"
  },
  {
    "date": "Fri Aug 21 2020",
    "value": "26.7703"
  },
  {
    "date": "Mon Aug 24 2020",
    "value": "27.0121"
  },
  {
    "date": "Tue Aug 25 2020",
    "value": "27.2517"
  },
  {
    "date": "Wed Aug 26 2020",
    "value": "27.435"
  },
  {
    "date": "Thu Aug 27 2020",
    "value": "27.2827"
  },
  {
    "date": "Fri Aug 28 2020",
    "value": "27.4158"
  },
  {
    "date": "Mon Aug 31 2020",
    "value": "26.5022"
  },
  {
    "date": "Tue Sep 01 2020",
    "value": "26.6104"
  },
  {
    "date": "Wed Sep 02 2020",
    "value": "26.7926"
  },
  {
    "date": "Thu Sep 03 2020",
    "value": "26.9979"
  },
  {
    "date": "Fri Sep 04 2020",
    "value": "26.613"
  },
  {
    "date": "Mon Sep 07 2020",
    "value": "26.5168"
  },
  {
    "date": "Tue Sep 08 2020",
    "value": "26.2855"
  },
  {
    "date": "Wed Sep 09 2020",
    "value": "26.0456"
  },
  {
    "date": "Thu Sep 10 2020",
    "value": "26.2804"
  },
  {
    "date": "Fri Sep 11 2020",
    "value": "26.3698"
  },
  {
    "date": "Mon Sep 14 2020",
    "value": "27.3249"
  },
  {
    "date": "Tue Sep 15 2020",
    "value": "27.5901"
  },
  {
    "date": "Wed Sep 16 2020",
    "value": "27.7009"
  },
  {
    "date": "Thu Sep 17 2020",
    "value": "27.5961"
  },
  {
    "date": "Fri Sep 18 2020",
    "value": "27.4504"
  },
  {
    "date": "Mon Sep 21 2020",
    "value": "26.5635"
  },
  {
    "date": "Tue Sep 22 2020",
    "value": "26.1978"
  },
  {
    "date": "Wed Sep 23 2020",
    "value": "26.1869"
  },
  {
    "date": "Thu Sep 24 2020",
    "value": "25.9114"
  },
  {
    "date": "Fri Sep 25 2020",
    "value": "26.1811"
  },
  {
    "date": "Mon Sep 28 2020",
    "value": "26.7812"
  },
  {
    "date": "Tue Sep 29 2020",
    "value": "26.8708"
  },
  {
    "date": "Wed Sep 30 2020",
    "value": "27.1913"
  },
  {
    "date": "Thu Oct 01 2020",
    "value": "27.3693"
  },
  {
    "date": "Mon Oct 05 2020",
    "value": "27.1975"
  },
  {
    "date": "Tue Oct 06 2020",
    "value": "27.34"
  },
  {
    "date": "Wed Oct 07 2020",
    "value": "27.0608"
  },
  {
    "date": "Thu Oct 08 2020",
    "value": "26.9838"
  },
  {
    "date": "Fri Oct 09 2020",
    "value": "26.862"
  },
  {
    "date": "Mon Oct 12 2020",
    "value": "26.8612"
  },
  {
    "date": "Tue Oct 13 2020",
    "value": "26.7436"
  },
  {
    "date": "Wed Oct 14 2020",
    "value": "26.8745"
  },
  {
    "date": "Thu Oct 15 2020",
    "value": "26.5592"
  },
  {
    "date": "Fri Oct 16 2020",
    "value": "26.6435"
  },
  {
    "date": "Mon Oct 19 2020",
    "value": "26.6502"
  },
  {
    "date": "Tue Oct 20 2020",
    "value": "26.6471"
  },
  {
    "date": "Wed Oct 21 2020",
    "value": "26.7054"
  },
  {
    "date": "Thu Oct 22 2020",
    "value": "26.76"
  },
  {
    "date": "Fri Oct 23 2020",
    "value": "27.0674"
  },
  {
    "date": "Mon Oct 26 2020",
    "value": "26.7116"
  },
  {
    "date": "Tue Oct 27 2020",
    "value": "27.039"
  },
  {
    "date": "Wed Oct 28 2020",
    "value": "27.05"
  },
  {
    "date": "Thu Oct 29 2020",
    "value": "27.1943"
  },
  {
    "date": "Fri Oct 30 2020",
    "value": "27.3448"
  },
  {
    "date": "Mon Nov 02 2020",
    "value": "27.3779"
  },
  {
    "date": "Tue Nov 03 2020",
    "value": "27.5654"
  },
  {
    "date": "Wed Nov 04 2020",
    "value": "27.9453"
  },
  {
    "date": "Thu Nov 05 2020",
    "value": "28.2594"
  },
  {
    "date": "Fri Nov 06 2020",
    "value": "28.4677"
  },
  {
    "date": "Mon Nov 09 2020",
    "value": "28.6648"
  },
  {
    "date": "Tue Nov 10 2020",
    "value": "28.3965"
  },
  {
    "date": "Wed Nov 11 2020",
    "value": "28.3682"
  },
  {
    "date": "Thu Nov 12 2020",
    "value": "28.4676"
  },
  {
    "date": "Fri Nov 13 2020",
    "value": "28.6418"
  },
  {
    "date": "Tue Nov 17 2020",
    "value": "29.2633"
  },
  {
    "date": "Wed Nov 18 2020",
    "value": "29.4897"
  },
  {
    "date": "Thu Nov 19 2020",
    "value": "29.2993"
  },
  {
    "date": "Fri Nov 20 2020",
    "value": "29.7487"
  },
  {
    "date": "Mon Nov 23 2020",
    "value": "30.2564"
  },
  {
    "date": "Tue Nov 24 2020",
    "value": "30.3463"
  },
  {
    "date": "Wed Nov 25 2020",
    "value": "29.8112"
  },
  {
    "date": "Thu Nov 26 2020",
    "value": "29.9355"
  },
  {
    "date": "Fri Nov 27 2020",
    "value": "30.4977"
  },
  {
    "date": "Tue Dec 01 2020",
    "value": "30.7001"
  },
  {
    "date": "Wed Dec 02 2020",
    "value": "30.7974"
  },
  {
    "date": "Thu Dec 03 2020",
    "value": "30.7809"
  },
  {
    "date": "Fri Dec 04 2020",
    "value": "30.8352"
  },
  {
    "date": "Mon Dec 07 2020",
    "value": "30.7737"
  },
  {
    "date": "Tue Dec 08 2020",
    "value": "30.7476"
  },
  {
    "date": "Wed Dec 09 2020",
    "value": "30.7428"
  },
  {
    "date": "Thu Dec 10 2020",
    "value": "30.7265"
  },
  {
    "date": "Fri Dec 11 2020",
    "value": "30.9152"
  },
  {
    "date": "Mon Dec 14 2020",
    "value": "31.0325"
  },
  {
    "date": "Tue Dec 15 2020",
    "value": "31.1296"
  },
  {
    "date": "Wed Dec 16 2020",
    "value": "31.2801"
  },
  {
    "date": "Thu Dec 17 2020",
    "value": "31.356"
  },
  {
    "date": "Fri Dec 18 2020",
    "value": "31.3801"
  },
  {
    "date": "Mon Dec 21 2020",
    "value": "30.566"
  },
  {
    "date": "Tue Dec 22 2020",
    "value": "30.646"
  },
  {
    "date": "Wed Dec 23 2020",
    "value": "31.2333"
  },
  {
    "date": "Thu Dec 24 2020",
    "value": "31.3398"
  },
  {
    "date": "Mon Dec 28 2020",
    "value": "31.6175"
  },
  {
    "date": "Tue Dec 29 2020",
    "value": "31.6043"
  },
  {
    "date": "Wed Dec 30 2020",
    "value": "31.7335"
  },
  {
    "date": "Thu Dec 31 2020",
    "value": "31.9016"
  },
  {
    "date": "Fri Jan 01 2021",
    "value": "32.1812"
  },
  {
    "date": "Mon Jan 04 2021",
    "value": "32.4327"
  },
  {
    "date": "Tue Jan 05 2021",
    "value": "32.625"
  },
  {
    "date": "Wed Jan 06 2021",
    "value": "32.6976"
  },
  {
    "date": "Thu Jan 07 2021",
    "value": "32.8928"
  },
  {
    "date": "Fri Jan 08 2021",
    "value": "33.2806"
  },
  {
    "date": "Mon Jan 11 2021",
    "value": "33.3008"
  },
  {
    "date": "Tue Jan 12 2021",
    "value": "33.241"
  },
  {
    "date": "Wed Jan 13 2021",
    "value": "32.9407"
  },
  {
    "date": "Thu Jan 14 2021",
    "value": "32.8594"
  },
  {
    "date": "Fri Jan 15 2021",
    "value": "32.5123"
  },
  {
    "date": "Mon Jan 18 2021",
    "value": "31.9751"
  },
  {
    "date": "Tue Jan 19 2021",
    "value": "32.6651"
  },
  {
    "date": "Wed Jan 20 2021",
    "value": "32.9477"
  },
  {
    "date": "Thu Jan 21 2021",
    "value": "32.9437"
  },
  {
    "date": "Fri Jan 22 2021",
    "value": "32.7414"
  },
  {
    "date": "Mon Jan 25 2021",
    "value": "32.368"
  },
  {
    "date": "Wed Jan 27 2021",
    "value": "32.0353"
  },
  {
    "date": "Thu Jan 28 2021",
    "value": "31.8864"
  },
  {
    "date": "Fri Jan 29 2021",
    "value": "31.8058"
  },
  {
    "date": "Mon Feb 01 2021",
    "value": "32.6648"
  },
  {
    "date": "Tue Feb 02 2021",
    "value": "33.3333"
  },
  {
    "date": "Wed Feb 03 2021",
    "value": "33.8408"
  },
  {
    "date": "Thu Feb 04 2021",
    "value": "34.1488"
  },
  {
    "date": "Fri Feb 05 2021",
    "value": "33.941"
  },
  {
    "date": "Mon Feb 08 2021",
    "value": "34.3864"
  },
  {
    "date": "Tue Feb 09 2021",
    "value": "34.4857"
  },
  {
    "date": "Wed Feb 10 2021",
    "value": "34.8598"
  },
  {
    "date": "Thu Feb 11 2021",
    "value": "35.1991"
  },
  {
    "date": "Fri Feb 12 2021",
    "value": "35.0872"
  },
  {
    "date": "Mon Feb 15 2021",
    "value": "35.3658"
  },
  {
    "date": "Tue Feb 16 2021",
    "value": "35.402"
  },
  {
    "date": "Wed Feb 17 2021",
    "value": "35.5506"
  },
  {
    "date": "Thu Feb 18 2021",
    "value": "35.5091"
  },
  {
    "date": "Fri Feb 19 2021",
    "value": "35.0828"
  },
  {
    "date": "Mon Feb 22 2021",
    "value": "34.7675"
  },
  {
    "date": "Tue Feb 23 2021",
    "value": "34.9808"
  },
  {
    "date": "Wed Feb 24 2021",
    "value": "35.2675"
  },
  {
    "date": "Thu Feb 25 2021",
    "value": "35.7267"
  },
  {
    "date": "Fri Feb 26 2021",
    "value": "35.2626"
  },
  {
    "date": "Mon Mar 01 2021",
    "value": "35.6254"
  },
  {
    "date": "Tue Mar 02 2021",
    "value": "36.1446"
  },
  {
    "date": "Wed Mar 03 2021",
    "value": "36.6393"
  },
  {
    "date": "Thu Mar 04 2021",
    "value": "36.8238"
  },
  {
    "date": "Fri Mar 05 2021",
    "value": "36.535"
  },
  {
    "date": "Mon Mar 08 2021",
    "value": "36.6796"
  },
  {
    "date": "Tue Mar 09 2021",
    "value": "36.7797"
  },
  {
    "date": "Wed Mar 10 2021",
    "value": "37.2154"
  },
  {
    "date": "Fri Mar 12 2021",
    "value": "36.8488"
  },
  {
    "date": "Mon Mar 15 2021",
    "value": "36.498"
  },
  {
    "date": "Tue Mar 16 2021",
    "value": "36.3023"
  },
  {
    "date": "Wed Mar 17 2021",
    "value": "35.558"
  },
  {
    "date": "Thu Mar 18 2021",
    "value": "35.0948"
  },
  {
    "date": "Fri Mar 19 2021",
    "value": "35.3377"
  },
  {
    "date": "Mon Mar 22 2021",
    "value": "35.47"
  },
  {
    "date": "Tue Mar 23 2021",
    "value": "35.4247"
  },
  {
    "date": "Wed Mar 24 2021",
    "value": "34.7388"
  },
  {
    "date": "Thu Mar 25 2021",
    "value": "34.2757"
  },
  {
    "date": "Fri Mar 26 2021",
    "value": "34.8038"
  },
  {
    "date": "Tue Mar 30 2021",
    "value": "35.4923"
  },
  {
    "date": "Wed Mar 31 2021",
    "value": "35.4814"
  },
  {
    "date": "Thu Apr 01 2021",
    "value": "35.8735"
  },
  {
    "date": "Mon Apr 05 2021",
    "value": "34.9948"
  },
  {
    "date": "Tue Apr 06 2021",
    "value": "35.1546"
  },
  {
    "date": "Wed Apr 07 2021",
    "value": "35.6734"
  },
  {
    "date": "Thu Apr 08 2021",
    "value": "36.0714"
  },
  {
    "date": "Fri Apr 09 2021",
    "value": "35.8017"
  },
  {
    "date": "Mon Apr 12 2021",
    "value": "34.0728"
  },
  {
    "date": "Tue Apr 13 2021",
    "value": "34.2292"
  },
  {
    "date": "Thu Apr 15 2021",
    "value": "34.1853"
  },
  {
    "date": "Fri Apr 16 2021",
    "value": "34.718"
  },
  {
    "date": "Mon Apr 19 2021",
    "value": "34.0448"
  },
  {
    "date": "Tue Apr 20 2021",
    "value": "34.1884"
  },
  {
    "date": "Thu Apr 22 2021",
    "value": "34.3758"
  },
  {
    "date": "Fri Apr 23 2021",
    "value": "34.3287"
  },
  {
    "date": "Mon Apr 26 2021",
    "value": "34.8049"
  },
  {
    "date": "Tue Apr 27 2021",
    "value": "35.3928"
  },
  {
    "date": "Wed Apr 28 2021",
    "value": "36.0615"
  },
  {
    "date": "Thu Apr 29 2021",
    "value": "36.1277"
  },
  {
    "date": "Fri Apr 30 2021",
    "value": "35.5716"
  },
  {
    "date": "Mon May 03 2021",
    "value": "35.5658"
  },
  {
    "date": "Tue May 04 2021",
    "value": "35.4519"
  },
  {
    "date": "Wed May 05 2021",
    "value": "35.7685"
  },
  {
    "date": "Thu May 06 2021",
    "value": "36.0817"
  },
  {
    "date": "Fri May 07 2021",
    "value": "35.7593"
  },
  {
    "date": "Mon May 10 2021",
    "value": "35.5646"
  },
  {
    "date": "Tue May 11 2021",
    "value": "35.849"
  },
  {
    "date": "Wed May 12 2021",
    "value": "35.5308"
  },
  {
    "date": "Fri May 14 2021",
    "value": "35.3388"
  },
  {
    "date": "Mon May 17 2021",
    "value": "35.7481"
  },
  {
    "date": "Tue May 18 2021",
    "value": "36.2151"
  },
  {
    "date": "Wed May 19 2021",
    "value": "36.598"
  },
  {
    "date": "Thu May 20 2021",
    "value": "36.4002"
  },
  {
    "date": "Fri May 21 2021",
    "value": "36.7797"
  },
  {
    "date": "Mon May 24 2021",
    "value": "37.0632"
  },
  {
    "date": "Tue May 25 2021",
    "value": "37.1343"
  },
  {
    "date": "Wed May 26 2021",
    "value": "37.2248"
  },
  {
    "date": "Thu May 27 2021",
    "value": "37.425"
  },
  {
    "date": "Fri May 28 2021",
    "value": "37.1367"
  },
  {
    "date": "Mon May 31 2021",
    "value": "37.4258"
  },
  {
    "date": "Tue Jun 01 2021",
    "value": "37.4264"
  },
  {
    "date": "Wed Jun 02 2021",
    "value": "37.7477"
  },
  {
    "date": "Thu Jun 03 2021",
    "value": "38.2731"
  },
  {
    "date": "Fri Jun 04 2021",
    "value": "38.2522"
  },
  {
    "date": "Mon Jun 07 2021",
    "value": "38.5836"
  },
  {
    "date": "Tue Jun 08 2021",
    "value": "39.0245"
  },
  {
    "date": "Wed Jun 09 2021",
    "value": "38.6345"
  },
  {
    "date": "Thu Jun 10 2021",
    "value": "39.1729"
  },
  {
    "date": "Fri Jun 11 2021",
    "value": "39.3533"
  },
  {
    "date": "Mon Jun 14 2021",
    "value": "39.3237"
  },
  {
    "date": "Tue Jun 15 2021",
    "value": "39.4701"
  },
  {
    "date": "Wed Jun 16 2021",
    "value": "39.0571"
  },
  {
    "date": "Thu Jun 17 2021",
    "value": "38.6623"
  },
  {
    "date": "Fri Jun 18 2021",
    "value": "38.1195"
  },
  {
    "date": "Mon Jun 21 2021",
    "value": "38.2146"
  },
  {
    "date": "Tue Jun 22 2021",
    "value": "38.1829"
  },
  {
    "date": "Wed Jun 23 2021",
    "value": "38.1349"
  },
  {
    "date": "Thu Jun 24 2021",
    "value": "38.1926"
  },
  {
    "date": "Fri Jun 25 2021",
    "value": "38.6488"
  },
  {
    "date": "Mon Jun 28 2021",
    "value": "38.8015"
  },
  {
    "date": "Tue Jun 29 2021",
    "value": "38.8079"
  },
  {
    "date": "Wed Jun 30 2021",
    "value": "38.856"
  },
  {
    "date": "Thu Jul 01 2021",
    "value": "38.8121"
  },
  {
    "date": "Fri Jul 02 2021",
    "value": "39.0416"
  },
  {
    "date": "Mon Jul 05 2021",
    "value": "39.1578"
  },
  {
    "date": "Tue Jul 06 2021",
    "value": "39.3995"
  },
  {
    "date": "Wed Jul 07 2021",
    "value": "39.4309"
  },
  {
    "date": "Thu Jul 08 2021",
    "value": "39.3311"
  },
  {
    "date": "Fri Jul 09 2021",
    "value": "39.5789"
  },
  {
    "date": "Mon Jul 12 2021",
    "value": "39.7579"
  },
  {
    "date": "Tue Jul 13 2021",
    "value": "40.0298"
  },
  {
    "date": "Wed Jul 14 2021",
    "value": "40.0166"
  },
  {
    "date": "Thu Jul 15 2021",
    "value": "40.1535"
  },
  {
    "date": "Fri Jul 16 2021",
    "value": "40.3628"
  },
  {
    "date": "Mon Jul 19 2021",
    "value": "40.476"
  },
  {
    "date": "Tue Jul 20 2021",
    "value": "40.0731"
  },
  {
    "date": "Thu Jul 22 2021",
    "value": "40.4941"
  },
  {
    "date": "Fri Jul 23 2021",
    "value": "40.6168"
  },
  {
    "date": "Mon Jul 26 2021",
    "value": "40.7752"
  },
  {
    "date": "Tue Jul 27 2021",
    "value": "40.5467"
  },
  {
    "date": "Wed Jul 28 2021",
    "value": "40.4093"
  },
  {
    "date": "Thu Jul 29 2021",
    "value": "40.8225"
  },
  {
    "date": "Fri Jul 30 2021",
    "value": "41.2239"
  },
  {
    "date": "Mon Aug 02 2021",
    "value": "41.619"
  },
  {
    "date": "Tue Aug 03 2021",
    "value": "41.8131"
  },
  {
    "date": "Wed Aug 04 2021",
    "value": "41.6846"
  },
  {
    "date": "Thu Aug 05 2021",
    "value": "41.6203"
  },
  {
    "date": "Fri Aug 06 2021",
    "value": "41.5659"
  },
  {
    "date": "Mon Aug 09 2021",
    "value": "41.4367"
  },
  {
    "date": "Tue Aug 10 2021",
    "value": "41.0714"
  },
  {
    "date": "Wed Aug 11 2021",
    "value": "40.9078"
  },
  {
    "date": "Thu Aug 12 2021",
    "value": "41.839"
  },
  {
    "date": "Fri Aug 13 2021",
    "value": "41.9408"
  },
  {
    "date": "Mon Aug 16 2021",
    "value": "41.8621"
  },
  {
    "date": "Tue Aug 17 2021",
    "value": "42.2452"
  },
  {
    "date": "Wed Aug 18 2021",
    "value": "42.153"
  },
  {
    "date": "Fri Aug 20 2021",
    "value": "41.4265"
  },
  {
    "date": "Mon Aug 23 2021",
    "value": "41.2736"
  },
  {
    "date": "Tue Aug 24 2021",
    "value": "41.6581"
  },
  {
    "date": "Wed Aug 25 2021",
    "value": "41.7549"
  },
  {
    "date": "Thu Aug 26 2021",
    "value": "41.896"
  },
  {
    "date": "Fri Aug 27 2021",
    "value": "42.0623"
  },
  {
    "date": "Mon Aug 30 2021",
    "value": "42.8775"
  },
  {
    "date": "Tue Aug 31 2021",
    "value": "43.248"
  },
  {
    "date": "Wed Sep 01 2021",
    "value": "43.4207"
  },
  {
    "date": "Thu Sep 02 2021",
    "value": "43.9829"
  },
  {
    "date": "Fri Sep 03 2021",
    "value": "43.8983"
  },
  {
    "date": "Mon Sep 06 2021",
    "value": "44.1008"
  },
  {
    "date": "Tue Sep 07 2021",
    "value": "44.7654"
  },
  {
    "date": "Wed Sep 08 2021",
    "value": "44.8231"
  },
  {
    "date": "Thu Sep 09 2021",
    "value": "44.7307"
  },
  {
    "date": "Mon Sep 13 2021",
    "value": "44.7883"
  },
  {
    "date": "Tue Sep 14 2021",
    "value": "45.1972"
  },
  {
    "date": "Wed Sep 15 2021",
    "value": "45.5559"
  },
  {
    "date": "Thu Sep 16 2021",
    "value": "46.1329"
  },
  {
    "date": "Fri Sep 17 2021",
    "value": "45.8674"
  },
  {
    "date": "Mon Sep 20 2021",
    "value": "45.3207"
  },
  {
    "date": "Tue Sep 21 2021",
    "value": "45.4092"
  },
  {
    "date": "Wed Sep 22 2021",
    "value": "45.6949"
  },
  {
    "date": "Thu Sep 23 2021",
    "value": "46.2081"
  },
  {
    "date": "Fri Sep 24 2021",
    "value": "46.083"
  },
  {
    "date": "Mon Sep 27 2021",
    "value": "45.9303"
  },
  {
    "date": "Tue Sep 28 2021",
    "value": "45.4863"
  },
  {
    "date": "Wed Sep 29 2021",
    "value": "45.6658"
  },
  {
    "date": "Thu Sep 30 2021",
    "value": "46.1969"
  },
  {
    "date": "Fri Oct 01 2021",
    "value": "46.2347"
  },
  {
    "date": "Mon Oct 04 2021",
    "value": "46.6472"
  },
  {
    "date": "Tue Oct 05 2021",
    "value": "46.7388"
  },
  {
    "date": "Wed Oct 06 2021",
    "value": "46.6798"
  },
  {
    "date": "Thu Oct 07 2021",
    "value": "47.7563"
  },
  {
    "date": "Fri Oct 08 2021",
    "value": "47.918"
  },
  {
    "date": "Mon Oct 11 2021",
    "value": "47.9553"
  },
  {
    "date": "Tue Oct 12 2021",
    "value": "48.0004"
  },
  {
    "date": "Wed Oct 13 2021",
    "value": "48.2554"
  },
  {
    "date": "Thu Oct 14 2021",
    "value": "48.8404"
  },
  {
    "date": "Mon Oct 18 2021",
    "value": "49.7207"
  },
  {
    "date": "Tue Oct 19 2021",
    "value": "48.9475"
  },
  {
    "date": "Wed Oct 20 2021",
    "value": "47.4547"
  },
  {
    "date": "Thu Oct 21 2021",
    "value": "47.4749"
  },
  {
    "date": "Fri Oct 22 2021",
    "value": "47.6367"
  },
  {
    "date": "Mon Oct 25 2021",
    "value": "46.644"
  },
  {
    "date": "Tue Oct 26 2021",
    "value": "47.5109"
  },
  {
    "date": "Wed Oct 27 2021",
    "value": "47.9385"
  },
  {
    "date": "Thu Oct 28 2021",
    "value": "47.7234"
  },
  {
    "date": "Fri Oct 29 2021",
    "value": "47.5402"
  },
  {
    "date": "Mon Nov 01 2021",
    "value": "48.2317"
  },
  {
    "date": "Tue Nov 02 2021",
    "value": "49.3992"
  },
  {
    "date": "Wed Nov 03 2021",
    "value": "49.2466"
  },
  {
    "date": "Mon Nov 08 2021",
    "value": "50.5255"
  },
  {
    "date": "Tue Nov 09 2021",
    "value": "50.524"
  },
  {
    "date": "Wed Nov 10 2021",
    "value": "50.6165"
  },
  {
    "date": "Thu Nov 11 2021",
    "value": "50.3159"
  },
  {
    "date": "Fri Nov 12 2021",
    "value": "50.7732"
  },
  {
    "date": "Mon Nov 15 2021",
    "value": "50.8664"
  },
  {
    "date": "Tue Nov 16 2021",
    "value": "50.5368"
  },
  {
    "date": "Wed Nov 17 2021",
    "value": "50.52"
  },
  {
    "date": "Thu Nov 18 2021",
    "value": "49.907"
  },
  {
    "date": "Mon Nov 22 2021",
    "value": "48.5743"
  },
  {
    "date": "Tue Nov 23 2021",
    "value": "49.3665"
  },
  {
    "date": "Wed Nov 24 2021",
    "value": "49.4259"
  },
  {
    "date": "Thu Nov 25 2021",
    "value": "49.6129"
  },
  {
    "date": "Fri Nov 26 2021",
    "value": "47.9219"
  },
  {
    "date": "Mon Nov 29 2021",
    "value": "47.4906"
  },
  {
    "date": "Tue Nov 30 2021",
    "value": "48.1736"
  },
  {
    "date": "Wed Dec 01 2021",
    "value": "48.6358"
  },
  {
    "date": "Thu Dec 02 2021",
    "value": "49.2078"
  },
  {
    "date": "Fri Dec 03 2021",
    "value": "49.0347"
  },
  {
    "date": "Mon Dec 06 2021",
    "value": "48.5234"
  },
  {
    "date": "Tue Dec 07 2021",
    "value": "49.0543"
  },
  {
    "date": "Wed Dec 08 2021",
    "value": "49.711"
  },
  {
    "date": "Thu Dec 09 2021",
    "value": "49.6949"
  },
  {
    "date": "Fri Dec 10 2021",
    "value": "49.955"
  },
  {
    "date": "Mon Dec 13 2021",
    "value": "50.5265"
  },
  {
    "date": "Tue Dec 14 2021",
    "value": "50.2357"
  },
  {
    "date": "Wed Dec 15 2021",
    "value": "50.0212"
  },
  {
    "date": "Thu Dec 16 2021",
    "value": "49.6859"
  },
  {
    "date": "Fri Dec 17 2021",
    "value": "48.7686"
  },
  {
    "date": "Mon Dec 20 2021",
    "value": "47.5841"
  },
  {
    "date": "Tue Dec 21 2021",
    "value": "48.3317"
  },
  {
    "date": "Wed Dec 22 2021",
    "value": "48.7601"
  },
  {
    "date": "Thu Dec 23 2021",
    "value": "49.5971"
  },
  {
    "date": "Fri Dec 24 2021",
    "value": "49.1311"
  },
  {
    "date": "Mon Dec 27 2021",
    "value": "49.4995"
  },
  {
    "date": "Tue Dec 28 2021",
    "value": "49.9867"
  },
  {
    "date": "Wed Dec 29 2021",
    "value": "49.8507"
  },
  {
    "date": "Thu Dec 30 2021",
    "value": "49.9792"
  },
  {
    "date": "Fri Dec 31 2021",
    "value": "50.3337"
  },
  {
    "date": "Mon Jan 03 2022",
    "value": "51.2733"
  },
  {
    "date": "Tue Jan 04 2022",
    "value": "52.0756"
  },
  {
    "date": "Wed Jan 05 2022",
    "value": "51.8759"
  },
  {
    "date": "Thu Jan 06 2022",
    "value": "51.5289"
  },
  {
    "date": "Fri Jan 07 2022",
    "value": "51.7266"
  },
  {
    "date": "Mon Jan 10 2022",
    "value": "51.841"
  },
  {
    "date": "Tue Jan 11 2022",
    "value": "52.2556"
  },
  {
    "date": "Wed Jan 12 2022",
    "value": "52.7575"
  },
  {
    "date": "Thu Jan 13 2022",
    "value": "52.7322"
  },
  {
    "date": "Fri Jan 14 2022",
    "value": "52.4556"
  },
  {
    "date": "Mon Jan 17 2022",
    "value": "52.3978"
  },
  {
    "date": "Tue Jan 18 2022",
    "value": "51.6755"
  },
  {
    "date": "Wed Jan 19 2022",
    "value": "51.6152"
  },
  {
    "date": "Thu Jan 20 2022",
    "value": "51.5741"
  },
  {
    "date": "Fri Jan 21 2022",
    "value": "50.8009"
  },
  {
    "date": "Mon Jan 24 2022",
    "value": "49.3351"
  },
  {
    "date": "Tue Jan 25 2022",
    "value": "49.6108"
  },
  {
    "date": "Thu Jan 27 2022",
    "value": "49.5938"
  },
  {
    "date": "Fri Jan 28 2022",
    "value": "49.5373"
  },
  {
    "date": "Mon Jan 31 2022",
    "value": "50.2647"
  },
  {
    "date": "Tue Feb 01 2022",
    "value": "50.4653"
  },
  {
    "date": "Wed Feb 02 2022",
    "value": "51.3992"
  },
  {
    "date": "Thu Feb 03 2022",
    "value": "51.0641"
  },
  {
    "date": "Fri Feb 04 2022",
    "value": "51.2539"
  },
  {
    "date": "Mon Feb 07 2022",
    "value": "50.8375"
  },
  {
    "date": "Tue Feb 08 2022",
    "value": "50.2321"
  },
  {
    "date": "Wed Feb 09 2022",
    "value": "50.7407"
  },
  {
    "date": "Thu Feb 10 2022",
    "value": "50.5004"
  },
  {
    "date": "Fri Feb 11 2022",
    "value": "49.7382"
  },
  {
    "date": "Mon Feb 14 2022",
    "value": "47.9798"
  },
  {
    "date": "Tue Feb 15 2022",
    "value": "49.0527"
  },
  {
    "date": "Wed Feb 16 2022",
    "value": "49.0607"
  },
  {
    "date": "Thu Feb 17 2022",
    "value": "49.2468"
  },
  {
    "date": "Fri Feb 18 2022",
    "value": "49.0075"
  },
  {
    "date": "Mon Feb 21 2022",
    "value": "48.6091"
  },
  {
    "date": "Tue Feb 22 2022",
    "value": "48.3833"
  },
  {
    "date": "Wed Feb 23 2022",
    "value": "48.39"
  },
  {
    "date": "Thu Feb 24 2022",
    "value": "46.4018"
  },
  {
    "date": "Fri Feb 25 2022",
    "value": "47.7712"
  },
  {
    "date": "Mon Feb 28 2022",
    "value": "47.7464"
  },
  {
    "date": "Wed Mar 02 2022",
    "value": "47.6604"
  },
  {
    "date": "Thu Mar 03 2022",
    "value": "46.9933"
  },
  {
    "date": "Fri Mar 04 2022",
    "value": "46.2614"
  },
  {
    "date": "Mon Mar 07 2022",
    "value": "44.8161"
  },
  {
    "date": "Tue Mar 08 2022",
    "value": "45.2141"
  },
  {
    "date": "Wed Mar 09 2022",
    "value": "46.2315"
  },
  {
    "date": "Thu Mar 10 2022",
    "value": "46.7381"
  },
  {
    "date": "Fri Mar 11 2022",
    "value": "47.2158"
  },
  {
    "date": "Mon Mar 14 2022",
    "value": "47.1821"
  },
  {
    "date": "Tue Mar 15 2022",
    "value": "46.7761"
  },
  {
    "date": "Wed Mar 16 2022",
    "value": "47.4864"
  },
  {
    "date": "Thu Mar 17 2022",
    "value": "48.0131"
  },
  {
    "date": "Mon Mar 21 2022",
    "value": "48.0255"
  },
  {
    "date": "Tue Mar 22 2022",
    "value": "48.2318"
  },
  {
    "date": "Wed Mar 23 2022",
    "value": "48.335"
  },
  {
    "date": "Thu Mar 24 2022",
    "value": "48.5976"
  },
  {
    "date": "Fri Mar 25 2022",
    "value": "48.4383"
  },
  {
    "date": "Mon Mar 28 2022",
    "value": "48.4643"
  },
  {
    "date": "Tue Mar 29 2022",
    "value": "48.9536"
  },
  {
    "date": "Wed Mar 30 2022",
    "value": "49.5636"
  },
  {
    "date": "Thu Mar 31 2022",
    "value": "49.6213"
  },
  {
    "date": "Fri Apr 01 2022",
    "value": "49.5676"
  },
  {
    "date": "Mon Apr 04 2022",
    "value": "49.8874"
  },
  {
    "date": "Tue Apr 05 2022",
    "value": "50.5531"
  },
  {
    "date": "Wed Apr 06 2022",
    "value": "50.8194"
  },
  {
    "date": "Thu Apr 07 2022",
    "value": "51.0731"
  },
  {
    "date": "Fri Apr 08 2022",
    "value": "52.291"
  },
  {
    "date": "Mon Apr 11 2022",
    "value": "52.4533"
  },
  {
    "date": "Tue Apr 12 2022",
    "value": "51.983"
  },
  {
    "date": "Wed Apr 13 2022",
    "value": "51.9596"
  },
  {
    "date": "Mon Apr 18 2022",
    "value": "51.1598"
  },
  {
    "date": "Tue Apr 19 2022",
    "value": "50.5713"
  },
  {
    "date": "Wed Apr 20 2022",
    "value": "50.8457"
  },
  {
    "date": "Thu Apr 21 2022",
    "value": "51.2671"
  },
  {
    "date": "Fri Apr 22 2022",
    "value": "50.9983"
  },
  {
    "date": "Mon Apr 25 2022",
    "value": "50.7258"
  },
  {
    "date": "Tue Apr 26 2022",
    "value": "51.9002"
  },
  {
    "date": "Wed Apr 27 2022",
    "value": "51.0868"
  },
  {
    "date": "Thu Apr 28 2022",
    "value": "51.7081"
  },
  {
    "date": "Fri Apr 29 2022",
    "value": "51.3769"
  },
  {
    "date": "Mon May 02 2022",
    "value": "50.9628"
  },
  {
    "date": "Wed May 04 2022",
    "value": "50.0292"
  },
  {
    "date": "Thu May 05 2022",
    "value": "50.2116"
  },
  {
    "date": "Fri May 06 2022",
    "value": "48.7194"
  },
  {
    "date": "Mon May 09 2022",
    "value": "48.4226"
  },
  {
    "date": "Tue May 10 2022",
    "value": "47.3066"
  },
  {
    "date": "Wed May 11 2022",
    "value": "47.5703"
  },
  {
    "date": "Thu May 12 2022",
    "value": "46.7573"
  },
  {
    "date": "Fri May 13 2022",
    "value": "47.2231"
  },
  {
    "date": "Mon May 16 2022",
    "value": "47.3076"
  },
  {
    "date": "Tue May 17 2022",
    "value": "47.6506"
  },
  {
    "date": "Wed May 18 2022",
    "value": "47.9849"
  },
  {
    "date": "Thu May 19 2022",
    "value": "46.5913"
  },
  {
    "date": "Fri May 20 2022",
    "value": "47.3803"
  },
  {
    "date": "Mon May 23 2022",
    "value": "47.1809"
  },
  {
    "date": "Tue May 24 2022",
    "value": "46.7039"
  },
  {
    "date": "Wed May 25 2022",
    "value": "46.1205"
  },
  {
    "date": "Thu May 26 2022",
    "value": "46.5408"
  },
  {
    "date": "Fri May 27 2022",
    "value": "47.1438"
  },
  {
    "date": "Mon May 30 2022",
    "value": "48.1474"
  },
  {
    "date": "Tue May 31 2022",
    "value": "48.3999"
  },
  {
    "date": "Wed Jun 01 2022",
    "value": "48.8847"
  },
  {
    "date": "Thu Jun 02 2022",
    "value": "49.0592"
  },
  {
    "date": "Fri Jun 03 2022",
    "value": "48.3362"
  },
  {
    "date": "Mon Jun 06 2022",
    "value": "47.8044"
  },
  {
    "date": "Tue Jun 07 2022",
    "value": "47.1329"
  },
  {
    "date": "Wed Jun 08 2022",
    "value": "46.7288"
  },
  {
    "date": "Thu Jun 09 2022",
    "value": "46.5741"
  },
  {
    "date": "Fri Jun 10 2022",
    "value": "46.0047"
  },
  {
    "date": "Mon Jun 13 2022",
    "value": "44.822"
  },
  {
    "date": "Tue Jun 14 2022",
    "value": "44.8663"
  },
  {
    "date": "Wed Jun 15 2022",
    "value": "45.3515"
  },
  {
    "date": "Thu Jun 16 2022",
    "value": "44.3931"
  },
  {
    "date": "Fri Jun 17 2022",
    "value": "44.3367"
  },
  {
    "date": "Mon Jun 20 2022",
    "value": "44.4859"
  },
  {
    "date": "Tue Jun 21 2022",
    "value": "45.1478"
  },
  {
    "date": "Wed Jun 22 2022",
    "value": "44.8072"
  },
  {
    "date": "Thu Jun 23 2022",
    "value": "45.3992"
  },
  {
    "date": "Fri Jun 24 2022",
    "value": "46.086"
  },
  {
    "date": "Mon Jun 27 2022",
    "value": "46.5206"
  },
  {
    "date": "Tue Jun 28 2022",
    "value": "47.2994"
  },
  {
    "date": "Wed Jun 29 2022",
    "value": "47.1051"
  },
  {
    "date": "Thu Jun 30 2022",
    "value": "46.8092"
  },
  {
    "date": "Fri Jul 01 2022",
    "value": "46.7225"
  },
  {
    "date": "Mon Jul 04 2022",
    "value": "46.9158"
  },
  {
    "date": "Tue Jul 05 2022",
    "value": "47.0946"
  },
  {
    "date": "Wed Jul 06 2022",
    "value": "48.3793"
  },
  {
    "date": "Thu Jul 07 2022",
    "value": "49.0797"
  },
  {
    "date": "Fri Jul 08 2022",
    "value": "48.8844"
  },
  {
    "date": "Mon Jul 11 2022",
    "value": "49.4409"
  },
  {
    "date": "Tue Jul 12 2022",
    "value": "48.8813"
  },
  {
    "date": "Wed Jul 13 2022",
    "value": "49.0715"
  },
  {
    "date": "Thu Jul 14 2022",
    "value": "48.9415"
  },
  {
    "date": "Fri Jul 15 2022",
    "value": "49.1039"
  },
  {
    "date": "Mon Jul 18 2022",
    "value": "49.8516"
  },
  {
    "date": "Tue Jul 19 2022",
    "value": "50.9159"
  },
  {
    "date": "Wed Jul 20 2022",
    "value": "50.4805"
  },
  {
    "date": "Thu Jul 21 2022",
    "value": "51.1161"
  },
  {
    "date": "Fri Jul 22 2022",
    "value": "51.2668"
  },
  {
    "date": "Mon Jul 25 2022",
    "value": "51.3597"
  },
  {
    "date": "Tue Jul 26 2022",
    "value": "51.0781"
  },
  {
    "date": "Wed Jul 27 2022",
    "value": "51.0789"
  },
  {
    "date": "Thu Jul 28 2022",
    "value": "51.6512"
  },
  {
    "date": "Fri Jul 29 2022",
    "value": "52.0763"
  },
  {
    "date": "Mon Aug 01 2022",
    "value": "52.4336"
  },
  {
    "date": "Tue Aug 02 2022",
    "value": "52.6707"
  },
  {
    "date": "Wed Aug 03 2022",
    "value": "52.7"
  },
  {
    "date": "Thu Aug 04 2022",
    "value": "52.9262"
  },
  {
    "date": "Fri Aug 05 2022",
    "value": "53.1954"
  },
  {
    "date": "Mon Aug 08 2022",
    "value": "53.3862"
  },
  {
    "date": "Wed Aug 10 2022",
    "value": "53.0305"
  },
  {
    "date": "Thu Aug 11 2022",
    "value": "53.1458"
  },
  {
    "date": "Fri Aug 12 2022",
    "value": "53.7168"
  },
  {
    "date": "Tue Aug 16 2022",
    "value": "54.1073"
  },
  {
    "date": "Wed Aug 17 2022",
    "value": "54.5296"
  },
  {
    "date": "Thu Aug 18 2022",
    "value": "54.6391"
  },
  {
    "date": "Fri Aug 19 2022",
    "value": "54.6274"
  },
  {
    "date": "Mon Aug 22 2022",
    "value": "54.0587"
  },
  {
    "date": "Tue Aug 23 2022",
    "value": "53.8444"
  },
  {
    "date": "Wed Aug 24 2022",
    "value": "53.8748"
  },
  {
    "date": "Thu Aug 25 2022",
    "value": "54.0784"
  },
  {
    "date": "Fri Aug 26 2022",
    "value": "54.1527"
  },
  {
    "date": "Mon Aug 29 2022",
    "value": "53.8913"
  },
  {
    "date": "Tue Aug 30 2022",
    "value": "54.8976"
  },
  {
    "date": "Thu Sep 01 2022",
    "value": "54.8504"
  },
  {
    "date": "Fri Sep 02 2022",
    "value": "54.942"
  },
  {
    "date": "Mon Sep 05 2022",
    "value": "55.648"
  },
  {
    "date": "Tue Sep 06 2022",
    "value": "55.5333"
  },
  {
    "date": "Wed Sep 07 2022",
    "value": "56.2217"
  },
  {
    "date": "Thu Sep 08 2022",
    "value": "56.6388"
  },
  {
    "date": "Fri Sep 09 2022",
    "value": "57.3075"
  },
  {
    "date": "Mon Sep 12 2022",
    "value": "58.1264"
  },
  {
    "date": "Tue Sep 13 2022",
    "value": "58.2018"
  },
  {
    "date": "Wed Sep 14 2022",
    "value": "58.2723"
  },
  {
    "date": "Thu Sep 15 2022",
    "value": "58.7941"
  },
  {
    "date": "Fri Sep 16 2022",
    "value": "57.3215"
  },
  {
    "date": "Mon Sep 19 2022",
    "value": "58.0155"
  },
  {
    "date": "Tue Sep 20 2022",
    "value": "59.1418"
  },
  {
    "date": "Wed Sep 21 2022",
    "value": "59.1958"
  },
  {
    "date": "Thu Sep 22 2022",
    "value": "59.3207"
  },
  {
    "date": "Fri Sep 23 2022",
    "value": "58.3782"
  },
  {
    "date": "Mon Sep 26 2022",
    "value": "56.5969"
  },
  {
    "date": "Tue Sep 27 2022",
    "value": "56.5586"
  },
  {
    "date": "Wed Sep 28 2022",
    "value": "56.1277"
  },
  {
    "date": "Thu Sep 29 2022",
    "value": "56.2975"
  },
  {
    "date": "Fri Sep 30 2022",
    "value": "57.4827"
  },
  {
    "date": "Mon Oct 03 2022",
    "value": "56.4747"
  },
  {
    "date": "Tue Oct 04 2022",
    "value": "57.3333"
  },
  {
    "date": "Thu Oct 06 2022",
    "value": "57.8648"
  },
  {
    "date": "Fri Oct 07 2022",
    "value": "58.1866"
  },
  {
    "date": "Mon Oct 10 2022",
    "value": "57.8818"
  },
  {
    "date": "Tue Oct 11 2022",
    "value": "56.8824"
  },
  {
    "date": "Wed Oct 12 2022",
    "value": "57.0194"
  },
  {
    "date": "Thu Oct 13 2022",
    "value": "56.7785"
  },
  {
    "date": "Fri Oct 14 2022",
    "value": "56.7341"
  },
  {
    "date": "Mon Oct 17 2022",
    "value": "57.0223"
  },
  {
    "date": "Tue Oct 18 2022",
    "value": "57.855"
  },
  {
    "date": "Wed Oct 19 2022",
    "value": "58.1206"
  },
  {
    "date": "Thu Oct 20 2022",
    "value": "57.8787"
  },
  {
    "date": "Fri Oct 21 2022",
    "value": "57.3943"
  },
  {
    "date": "Tue Oct 25 2022",
    "value": "57.5684"
  },
  {
    "date": "Thu Oct 27 2022",
    "value": "57.8012"
  },
  {
    "date": "Fri Oct 28 2022",
    "value": "57.4211"
  },
  {
    "date": "Mon Oct 31 2022",
    "value": "58.2585"
  },
  {
    "date": "Tue Nov 01 2022",
    "value": "58.947"
  },
  {
    "date": "Wed Nov 02 2022",
    "value": "59.094"
  },
  {
    "date": "Thu Nov 03 2022",
    "value": "59.0228"
  },
  {
    "date": "Fri Nov 04 2022",
    "value": "59.2209"
  },
  {
    "date": "Mon Nov 07 2022",
    "value": "59.1263"
  },
  {
    "date": "Wed Nov 09 2022",
    "value": "58.2589"
  },
  {
    "date": "Thu Nov 10 2022",
    "value": "57.4634"
  },
  {
    "date": "Fri Nov 11 2022",
    "value": "57.1121"
  },
  {
    "date": "Mon Nov 14 2022",
    "value": "56.8689"
  },
  {
    "date": "Tue Nov 15 2022",
    "value": "57.0927"
  },
  {
    "date": "Wed Nov 16 2022",
    "value": "57.1239"
  },
  {
    "date": "Thu Nov 17 2022",
    "value": "56.6513"
  },
  {
    "date": "Fri Nov 18 2022",
    "value": "56.4786"
  },
  {
    "date": "Mon Nov 21 2022",
    "value": "56.4486"
  },
  {
    "date": "Tue Nov 22 2022",
    "value": "56.4851"
  },
  {
    "date": "Wed Nov 23 2022",
    "value": "56.5844"
  },
  {
    "date": "Thu Nov 24 2022",
    "value": "56.9229"
  },
  {
    "date": "Fri Nov 25 2022",
    "value": "57.0432"
  },
  {
    "date": "Mon Nov 28 2022",
    "value": "57.7312"
  },
  {
    "date": "Tue Nov 29 2022",
    "value": "57.6196"
  },
  {
    "date": "Wed Nov 30 2022",
    "value": "58.0145"
  },
  {
    "date": "Thu Dec 01 2022",
    "value": "58.3515"
  },
  {
    "date": "Fri Dec 02 2022",
    "value": "58.9851"
  },
  {
    "date": "Mon Dec 05 2022",
    "value": "58.9919"
  },
  {
    "date": "Tue Dec 06 2022",
    "value": "59.0349"
  },
  {
    "date": "Wed Dec 07 2022",
    "value": "58.911"
  },
  {
    "date": "Thu Dec 08 2022",
    "value": "58.9141"
  },
  {
    "date": "Fri Dec 09 2022",
    "value": "58.9576"
  },
  {
    "date": "Mon Dec 12 2022",
    "value": "58.9472"
  },
  {
    "date": "Tue Dec 13 2022",
    "value": "58.8495"
  },
  {
    "date": "Wed Dec 14 2022",
    "value": "59.0695"
  },
  {
    "date": "Thu Dec 15 2022",
    "value": "58.1067"
  },
  {
    "date": "Fri Dec 16 2022",
    "value": "57.8654"
  },
  {
    "date": "Mon Dec 19 2022",
    "value": "58.0256"
  },
  {
    "date": "Tue Dec 20 2022",
    "value": "57.9936"
  },
  {
    "date": "Wed Dec 21 2022",
    "value": "56.8396"
  },
  {
    "date": "Thu Dec 22 2022",
    "value": "56.2184"
  },
  {
    "date": "Fri Dec 23 2022",
    "value": "54.3217"
  },
  {
    "date": "Mon Dec 26 2022",
    "value": "55.336"
  },
  {
    "date": "Tue Dec 27 2022",
    "value": "55.9636"
  },
  {
    "date": "Wed Dec 28 2022",
    "value": "56.0902"
  },
  {
    "date": "Thu Dec 29 2022",
    "value": "56.0746"
  },
  {
    "date": "Fri Dec 30 2022",
    "value": "56.3637"
  },
  {
    "date": "Mon Jan 02 2023",
    "value": "56.5233"
  },
  {
    "date": "Tue Jan 03 2023",
    "value": "56.734"
  },
  {
    "date": "Wed Jan 04 2023",
    "value": "56.1618"
  },
  {
    "date": "Thu Jan 05 2023",
    "value": "56.0472"
  },
  {
    "date": "Fri Jan 06 2023",
    "value": "55.6357"
  },
  {
    "date": "Mon Jan 09 2023",
    "value": "56.4281"
  },
  {
    "date": "Tue Jan 10 2023",
    "value": "56.1829"
  },
  {
    "date": "Wed Jan 11 2023",
    "value": "56.3272"
  },
  {
    "date": "Thu Jan 12 2023",
    "value": "56.4175"
  },
  {
    "date": "Fri Jan 13 2023",
    "value": "56.7198"
  },
  {
    "date": "Mon Jan 16 2023",
    "value": "56.4281"
  },
  {
    "date": "Tue Jan 17 2023",
    "value": "56.5472"
  },
  {
    "date": "Wed Jan 18 2023",
    "value": "56.5937"
  },
  {
    "date": "Thu Jan 19 2023",
    "value": "56.6274"
  },
  {
    "date": "Fri Jan 20 2023",
    "value": "56.5661"
  },
  {
    "date": "Mon Jan 23 2023",
    "value": "56.2825"
  },
  {
    "date": "Tue Jan 24 2023",
    "value": "56.078"
  },
  {
    "date": "Wed Jan 25 2023",
    "value": "55.5912"
  },
  {
    "date": "Fri Jan 27 2023",
    "value": "55.3559"
  },
  {
    "date": "Mon Jan 30 2023",
    "value": "55.2661"
  },
  {
    "date": "Tue Jan 31 2023",
    "value": "55.9166"
  },
  {
    "date": "Wed Feb 01 2023",
    "value": "55.9041"
  },
  {
    "date": "Thu Feb 02 2023",
    "value": "56.2959"
  },
  {
    "date": "Fri Feb 03 2023",
    "value": "56.3388"
  },
  {
    "date": "Mon Feb 06 2023",
    "value": "56.2686"
  },
  {
    "date": "Tue Feb 07 2023",
    "value": "56.3549"
  },
  {
    "date": "Wed Feb 08 2023",
    "value": "56.3837"
  },
  {
    "date": "Thu Feb 09 2023",
    "value": "56.3569"
  },
  {
    "date": "Fri Feb 10 2023",
    "value": "57.2901"
  },
  {
    "date": "Mon Feb 13 2023",
    "value": "56.7765"
  },
  {
    "date": "Tue Feb 14 2023",
    "value": "56.2374"
  },
  {
    "date": "Wed Feb 15 2023",
    "value": "55.9637"
  },
  {
    "date": "Thu Feb 16 2023",
    "value": "56.3078"
  },
  {
    "date": "Fri Feb 17 2023",
    "value": "55.9314"
  },
  {
    "date": "Mon Feb 20 2023",
    "value": "55.8901"
  },
  {
    "date": "Tue Feb 21 2023",
    "value": "55.9284"
  },
  {
    "date": "Wed Feb 22 2023",
    "value": "55.5404"
  },
  {
    "date": "Thu Feb 23 2023",
    "value": "55.498"
  },
  {
    "date": "Fri Feb 24 2023",
    "value": "56.0106"
  },
  {
    "date": "Mon Feb 27 2023",
    "value": "56.1113"
  },
  {
    "date": "Tue Feb 28 2023",
    "value": "56.3391"
  },
  {
    "date": "Wed Mar 01 2023",
    "value": "56.8973"
  },
  {
    "date": "Thu Mar 02 2023",
    "value": "56.7475"
  },
  {
    "date": "Fri Mar 03 2023",
    "value": "56.53"
  },
  {
    "date": "Mon Mar 06 2023",
    "value": "56.8282"
  },
  {
    "date": "Wed Mar 08 2023",
    "value": "57.0619"
  },
  {
    "date": "Thu Mar 09 2023",
    "value": "56.6445"
  },
  {
    "date": "Fri Mar 10 2023",
    "value": "56.4256"
  },
  {
    "date": "Mon Mar 13 2023",
    "value": "55.6796"
  },
  {
    "date": "Tue Mar 14 2023",
    "value": "55.514"
  },
  {
    "date": "Wed Mar 15 2023",
    "value": "55.4837"
  },
  {
    "date": "Thu Mar 16 2023",
    "value": "55.2447"
  },
  {
    "date": "Fri Mar 17 2023",
    "value": "55.3971"
  },
  {
    "date": "Mon Mar 20 2023",
    "value": "54.9981"
  },
  {
    "date": "Tue Mar 21 2023",
    "value": "55.0141"
  },
  {
    "date": "Wed Mar 22 2023",
    "value": "55.1546"
  },
  {
    "date": "Thu Mar 23 2023",
    "value": "54.9253"
  },
  {
    "date": "Fri Mar 24 2023",
    "value": "54.3283"
  },
  {
    "date": "Mon Mar 27 2023",
    "value": "54.0135"
  },
  {
    "date": "Tue Mar 28 2023",
    "value": "53.9434"
  },
  {
    "date": "Wed Mar 29 2023",
    "value": "54.8453"
  },
  {
    "date": "Fri Mar 31 2023",
    "value": "55.2204"
  },
  {
    "date": "Mon Apr 03 2023",
    "value": "54.7405"
  },
  {
    "date": "Wed Apr 05 2023",
    "value": "54.7448"
  },
  {
    "date": "Thu Apr 06 2023",
    "value": "55.0745"
  },
  {
    "date": "Mon Apr 10 2023",
    "value": "55.0897"
  },
  {
    "date": "Tue Apr 11 2023",
    "value": "55.4644"
  },
  {
    "date": "Wed Apr 12 2023",
    "value": "55.9403"
  },
  {
    "date": "Thu Apr 13 2023",
    "value": "56.0711"
  },
  {
    "date": "Mon Apr 17 2023",
    "value": "56.4089"
  },
  {
    "date": "Tue Apr 18 2023",
    "value": "56.7918"
  },
  {
    "date": "Wed Apr 19 2023",
    "value": "56.657"
  },
  {
    "date": "Thu Apr 20 2023",
    "value": "56.5622"
  },
  {
    "date": "Fri Apr 21 2023",
    "value": "56.2325"
  },
  {
    "date": "Mon Apr 24 2023",
    "value": "56.3685"
  },
  {
    "date": "Tue Apr 25 2023",
    "value": "56.1939"
  },
  {
    "date": "Wed Apr 26 2023",
    "value": "56.4553"
  },
  {
    "date": "Thu Apr 27 2023",
    "value": "56.7785"
  },
  {
    "date": "Fri Apr 28 2023",
    "value": "57.5423"
  },
  {
    "date": "Tue May 02 2023",
    "value": "57.7078"
  },
  {
    "date": "Wed May 03 2023",
    "value": "57.6659"
  },
  {
    "date": "Thu May 04 2023",
    "value": "58.1098"
  },
  {
    "date": "Fri May 05 2023",
    "value": "58.0651"
  },
  {
    "date": "Mon May 08 2023",
    "value": "58.4032"
  },
  {
    "date": "Tue May 09 2023",
    "value": "58.4527"
  },
  {
    "date": "Wed May 10 2023",
    "value": "58.5821"
  },
  {
    "date": "Thu May 11 2023",
    "value": "59.0227"
  },
  {
    "date": "Fri May 12 2023",
    "value": "58.9531"
  },
  {
    "date": "Mon May 15 2023",
    "value": "59.0926"
  },
  {
    "date": "Tue May 16 2023",
    "value": "59.3947"
  },
  {
    "date": "Wed May 17 2023",
    "value": "59.5773"
  },
  {
    "date": "Thu May 18 2023",
    "value": "59.5799"
  },
  {
    "date": "Fri May 19 2023",
    "value": "59.7891"
  },
  {
    "date": "Mon May 22 2023",
    "value": "60.4686"
  },
  {
    "date": "Tue May 23 2023",
    "value": "60.3521"
  },
  {
    "date": "Wed May 24 2023",
    "value": "60.9681"
  },
  {
    "date": "Thu May 25 2023",
    "value": "61.5439"
  },
  {
    "date": "Fri May 26 2023",
    "value": "62.2342"
  },
  {
    "date": "Mon May 29 2023",
    "value": "62.0559"
  },
  {
    "date": "Tue May 30 2023",
    "value": "61.9235"
  },
  {
    "date": "Wed May 31 2023",
    "value": "62.562"
  },
  {
    "date": "Thu Jun 01 2023",
    "value": "62.6779"
  },
  {
    "date": "Fri Jun 02 2023",
    "value": "63.2433"
  },
  {
    "date": "Mon Jun 05 2023",
    "value": "63.3819"
  },
  {
    "date": "Tue Jun 06 2023",
    "value": "63.1744"
  },
  {
    "date": "Tue Jun 06 2023",
    "value": "63.1744"
  },
  {
    "date": "Wed Jun 07 2023",
    "value": "63.8529"
  },
  {
    "date": "Wed Jun 07 2023",
    "value": "63.8529"
  },
  {
    "date": "Thu Jun 08 2023",
    "value": "63.5301"
  },
  {
    "date": "Thu Jun 08 2023",
    "value": "63.5301"
  },
  {
    "date": "Fri Jun 09 2023",
    "value": "63.4751"
  },
  {
    "date": "Fri Jun 09 2023",
    "value": "63.4751"
  },
  {
    "date": "Fri Jun 09 2023",
    "value": "63.4751"
  },
  {
    "date": "Fri Jun 09 2023",
    "value": "63.4751"
  },
  {
    "date": "Fri Jun 09 2023",
    "value": "63.4751"
  },
  {
    "date": "Fri Jun 09 2023",
    "value": "63.4751"
  },
  {
    "date": "Mon Jun 12 2023",
    "value": "63.8768"
  },
  {
    "date": "Mon Jun 12 2023",
    "value": "63.8768"
  },
  {
    "date": "Tue Jun 13 2023",
    "value": "64.1194"
  },
  {
    "date": "Tue Jun 13 2023",
    "value": "64.1194"
  },
  {
    "date": "Wed Jun 14 2023",
    "value": "63.6955"
  },
  {
    "date": "Wed Jun 14 2023",
    "value": "63.6955"
  },
  {
    "date": "Thu Jun 15 2023",
    "value": "64.1913"
  },
  {
    "date": "Thu Jun 15 2023",
    "value": "64.1913"
  },
  {
    "date": "Fri Jun 16 2023",
    "value": "64.5084"
  },
  {
    "date": "Fri Jun 16 2023",
    "value": "64.5084"
  },
  {
    "date": "Fri Jun 16 2023",
    "value": "64.5084"
  },
  {
    "date": "Fri Jun 16 2023",
    "value": "64.5084"
  },
  {
    "date": "Fri Jun 16 2023",
    "value": "64.5084"
  },
  {
    "date": "Fri Jun 16 2023",
    "value": "64.5084"
  },
  {
    "date": "Mon Jun 19 2023",
    "value": "64.4069"
  },
  {
    "date": "Mon Jun 19 2023",
    "value": "64.4069"
  },
  {
    "date": "Tue Jun 20 2023",
    "value": "64.8096"
  },
  {
    "date": "Tue Jun 20 2023",
    "value": "64.8096"
  },
  {
    "date": "Wed Jun 21 2023",
    "value": "65.3725"
  },
  {
    "date": "Wed Jun 21 2023",
    "value": "65.3725"
  },
  {
    "date": "Thu Jun 22 2023",
    "value": "65.1743"
  },
  {
    "date": "Thu Jun 22 2023",
    "value": "65.1743"
  },
  {
    "date": "Fri Jun 23 2023",
    "value": "64.421"
  },
  {
    "date": "Fri Jun 23 2023",
    "value": "64.421"
  },
  {
    "date": "Fri Jun 23 2023",
    "value": "64.421"
  },
  {
    "date": "Fri Jun 23 2023",
    "value": "64.421"
  },
  {
    "date": "Fri Jun 23 2023",
    "value": "64.421"
  },
  {
    "date": "Fri Jun 23 2023",
    "value": "64.421"
  },
  {
    "date": "Mon Jun 26 2023",
    "value": "64.8164"
  },
  {
    "date": "Mon Jun 26 2023",
    "value": "64.8164"
  },
  {
    "date": "Tue Jun 27 2023",
    "value": "64.9339"
  },
  {
    "date": "Tue Jun 27 2023",
    "value": "64.9339"
  },
  {
    "date": "Wed Jun 28 2023",
    "value": "65.0037"
  },
  {
    "date": "Wed Jun 28 2023",
    "value": "65.0037"
  },
  {
    "date": "Wed Jun 28 2023",
    "value": "65.0037"
  },
  {
    "date": "Wed Jun 28 2023",
    "value": "65.0037"
  },
  {
    "date": "Fri Jun 30 2023",
    "value": "65.2814"
  },
  {
    "date": "Fri Jun 30 2023",
    "value": "65.2814"
  },
  {
    "date": "Fri Jun 30 2023",
    "value": "65.2814"
  },
  {
    "date": "Fri Jun 30 2023",
    "value": "65.2814"
  },
  {
    "date": "Fri Jun 30 2023",
    "value": "65.2814"
  },
  {
    "date": "Fri Jun 30 2023",
    "value": "65.2814"
  },
  {
    "date": "Thu Jul 06 2023",
    "value": "65.4707"
  },
  {
    "date": "Thu Jul 06 2023",
    "value": "65.4707"
  },
  {
    "date": "Fri Jul 07 2023",
    "value": "65.273"
  },
  {
    "date": "Fri Jul 07 2023",
    "value": "65.273"
  },
  {
    "date": "Fri Jul 07 2023",
    "value": "65.273"
  },
  {
    "date": "Fri Jul 07 2023",
    "value": "65.273"
  },
  {
    "date": "Fri Jul 07 2023",
    "value": "65.273"
  },
  {
    "date": "Fri Jul 07 2023",
    "value": "65.273"
  },
  {
    "date": "Mon Jul 10 2023",
    "value": "64.6527"
  },
  {
    "date": "Mon Jul 10 2023",
    "value": "64.6527"
  },
  {
    "date": "Tue Jul 11 2023",
    "value": "65.1612"
  },
  {
    "date": "Tue Jul 11 2023",
    "value": "65.1612"
  },
  {
    "date": "Wed Jul 12 2023",
    "value": "65.5478"
  },
  {
    "date": "Wed Jul 12 2023",
    "value": "65.5478"
  },
  {
    "date": "Thu Jul 13 2023",
    "value": "65.6727"
  },
  {
    "date": "Thu Jul 13 2023",
    "value": "65.6727"
  },
  {
    "date": "Fri Jul 14 2023",
    "value": "66.4365"
  },
  {
    "date": "Fri Jul 14 2023",
    "value": "66.4365"
  },
  {
    "date": "Fri Jul 14 2023",
    "value": "66.4365"
  },
  {
    "date": "Fri Jul 14 2023",
    "value": "66.4365"
  },
  {
    "date": "Fri Jul 14 2023",
    "value": "66.4365"
  },
  {
    "date": "Fri Jul 14 2023",
    "value": "66.4365"
  },
  {
    "date": "Mon Jul 17 2023",
    "value": "66.4982"
  },
  {
    "date": "Mon Jul 17 2023",
    "value": "66.4982"
  },
  {
    "date": "Mon Jul 17 2023",
    "value": "66.4982"
  },
  {
    "date": "Tue Jul 18 2023",
    "value": "66.2398"
  },
  {
    "date": "Tue Jul 18 2023",
    "value": "66.2398"
  },
  {
    "date": "Tue Jul 18 2023",
    "value": "66.2398"
  },
  {
    "date": "Wed Jul 19 2023",
    "value": "66.3338"
  },
  {
    "date": "Wed Jul 19 2023",
    "value": "66.3338"
  },
  {
    "date": "Wed Jul 19 2023",
    "value": "66.3338"
  },
  {
    "date": "Thu Jul 20 2023",
    "value": "65.9289"
  },
  {
    "date": "Thu Jul 20 2023",
    "value": "65.9289"
  },
  {
    "date": "Fri Jul 21 2023",
    "value": "65.42"
  },
  {
    "date": "Fri Jul 21 2023",
    "value": "65.42"
  },
  {
    "date": "Fri Jul 21 2023",
    "value": "65.42"
  },
  {
    "date": "Fri Jul 21 2023",
    "value": "65.42"
  },
  {
    "date": "Fri Jul 21 2023",
    "value": "65.42"
  },
  {
    "date": "Fri Jul 21 2023",
    "value": "65.42"
  },
  {
    "date": "Mon Jul 24 2023",
    "value": "65.6586"
  },
  {
    "date": "Mon Jul 24 2023",
    "value": "65.6586"
  },
  {
    "date": "Mon Jul 24 2023",
    "value": "65.6586"
  },
  {
    "date": "Tue Jul 25 2023",
    "value": "65.4349"
  },
  {
    "date": "Tue Jul 25 2023",
    "value": "65.4349"
  },
  {
    "date": "Wed Jul 26 2023",
    "value": "65.7413"
  },
  {
    "date": "Wed Jul 26 2023",
    "value": "65.7413"
  },
  {
    "date": "Thu Jul 27 2023",
    "value": "65.7986"
  },
  {
    "date": "Thu Jul 27 2023",
    "value": "65.7986"
  },
  {
    "date": "Fri Jul 28 2023",
    "value": "66.2209"
  },
  {
    "date": "Fri Jul 28 2023",
    "value": "66.2209"
  },
  {
    "date": "Fri Jul 28 2023",
    "value": "66.2209"
  },
  {
    "date": "Fri Jul 28 2023",
    "value": "66.2209"
  },
  {
    "date": "Fri Jul 28 2023",
    "value": "66.2209"
  },
  {
    "date": "Fri Jul 28 2023",
    "value": "66.2209"
  },
  {
    "date": "Mon Jul 31 2023",
    "value": "66.4265"
  },
  {
    "date": "Mon Jul 31 2023",
    "value": "66.4265"
  },
  {
    "date": "Tue Aug 01 2023",
    "value": "66.8366"
  },
  {
    "date": "Tue Aug 01 2023",
    "value": "66.8366"
  },
  {
    "date": "Wed Aug 02 2023",
    "value": "66.0573"
  },
  {
    "date": "Wed Aug 02 2023",
    "value": "66.0573"
  },
  {
    "date": "Thu Aug 03 2023",
    "value": "65.9046"
  },
  {
    "date": "Thu Aug 03 2023",
    "value": "65.9046"
  },
  {
    "date": "Fri Aug 04 2023",
    "value": "67.2431"
  },
  {
    "date": "Fri Aug 04 2023",
    "value": "67.2431"
  },
  {
    "date": "Fri Aug 04 2023",
    "value": "67.2431"
  },
  {
    "date": "Fri Aug 04 2023",
    "value": "67.2431"
  },
  {
    "date": "Fri Aug 04 2023",
    "value": "67.2431"
  },
  {
    "date": "Fri Aug 04 2023",
    "value": "67.2431"
  },
  {
    "date": "Mon Aug 07 2023",
    "value": "67.4205"
  },
  {
    "date": "Mon Aug 07 2023",
    "value": "67.4205"
  },
  {
    "date": "Tue Aug 08 2023",
    "value": "67.1955"
  },
  {
    "date": "Tue Aug 08 2023",
    "value": "67.1955"
  },
  {
    "date": "Wed Aug 09 2023",
    "value": "67.1129"
  },
  {
    "date": "Wed Aug 09 2023",
    "value": "67.1129"
  },
  {
    "date": "Thu Aug 10 2023",
    "value": "67.0528"
  },
  {
    "date": "Thu Aug 10 2023",
    "value": "67.0528"
  },
  {
    "date": "Fri Aug 11 2023",
    "value": "66.9454"
  },
  {
    "date": "Fri Aug 11 2023",
    "value": "66.9454"
  },
  {
    "date": "Fri Aug 11 2023",
    "value": "66.9454"
  },
  {
    "date": "Fri Aug 11 2023",
    "value": "66.9454"
  },
  {
    "date": "Fri Aug 11 2023",
    "value": "66.9454"
  },
  {
    "date": "Fri Aug 11 2023",
    "value": "66.9454"
  },
  {
    "date": "Mon Aug 14 2023",
    "value": "66.709"
  },
  {
    "date": "Mon Aug 14 2023",
    "value": "66.709"
  },
  {
    "date": "Mon Aug 14 2023",
    "value": "66.709"
  },
  {
    "date": "Mon Aug 14 2023",
    "value": "66.709"
  },
  {
    "date": "Wed Aug 16 2023",
    "value": "66.5215"
  },
  {
    "date": "Wed Aug 16 2023",
    "value": "66.5215"
  },
  {
    "date": "Thu Aug 17 2023",
    "value": "66.1324"
  },
  {
    "date": "Thu Aug 17 2023",
    "value": "66.1324"
  },
  {
    "date": "Fri Aug 18 2023",
    "value": "65.973"
  },
  {
    "date": "Fri Aug 18 2023",
    "value": "65.973"
  },
  {
    "date": "Fri Aug 18 2023",
    "value": "65.973"
  },
  {
    "date": "Fri Aug 18 2023",
    "value": "65.973"
  },
  {
    "date": "Fri Aug 18 2023",
    "value": "65.973"
  },
  {
    "date": "Fri Aug 18 2023",
    "value": "65.973"
  },
  {
    "date": "Mon Aug 21 2023",
    "value": "66.3043"
  },
  {
    "date": "Mon Aug 21 2023",
    "value": "66.3043"
  },
  {
    "date": "Tue Aug 22 2023",
    "value": "66.8285"
  },
  {
    "date": "Tue Aug 22 2023",
    "value": "66.8285"
  },
  {
    "date": "Wed Aug 23 2023",
    "value": "67.2236"
  },
  {
    "date": "Wed Aug 23 2023",
    "value": "67.2236"
  },
  {
    "date": "Thu Aug 24 2023",
    "value": "67.7244"
  },
  {
    "date": "Thu Aug 24 2023",
    "value": "67.7244"
  },
  {
    "date": "Fri Aug 25 2023",
    "value": "67.5559"
  },
  {
    "date": "Fri Aug 25 2023",
    "value": "67.5559"
  },
  {
    "date": "Fri Aug 25 2023",
    "value": "67.5559"
  },
  {
    "date": "Fri Aug 25 2023",
    "value": "67.5559"
  },
  {
    "date": "Fri Aug 25 2023",
    "value": "67.5559"
  },
  {
    "date": "Fri Aug 25 2023",
    "value": "67.5559"
  },
  {
    "date": "Mon Aug 28 2023",
    "value": "67.3855"
  },
  {
    "date": "Mon Aug 28 2023",
    "value": "67.3855"
  },
  {
    "date": "Tue Aug 29 2023",
    "value": "68.1477"
  },
  {
    "date": "Tue Aug 29 2023",
    "value": "68.1477"
  },
  {
    "date": "Wed Aug 30 2023",
    "value": "69.3936"
  },
  {
    "date": "Wed Aug 30 2023",
    "value": "69.3936"
  },
  {
    "date": "Wed Aug 30 2023",
    "value": "69.3936"
  },
  {
    "date": "Wed Aug 30 2023",
    "value": "69.3936"
  },
  {
    "date": "Fri Sep 01 2023",
    "value": "71.1767"
  },
  {
    "date": "Fri Sep 01 2023",
    "value": "71.1767"
  },
  {
    "date": "Fri Sep 01 2023",
    "value": "71.1767"
  },
  {
    "date": "Fri Sep 01 2023",
    "value": "71.1767"
  },
  {
    "date": "Fri Sep 01 2023",
    "value": "71.1767"
  },
  {
    "date": "Fri Sep 01 2023",
    "value": "71.1767"
  },
  {
    "date": "Mon Sep 04 2023",
    "value": "71.8272"
  },
  {
    "date": "Mon Sep 04 2023",
    "value": "71.8272"
  },
  {
    "date": "Tue Sep 05 2023",
    "value": "72.3555"
  },
  {
    "date": "Tue Sep 05 2023",
    "value": "72.3555"
  },
  {
    "date": "Wed Sep 06 2023",
    "value": "72.2208"
  },
  {
    "date": "Wed Sep 06 2023",
    "value": "72.2208"
  },
  {
    "date": "Thu Sep 07 2023",
    "value": "72.5995"
  },
  {
    "date": "Thu Sep 07 2023",
    "value": "72.5995"
  },
  {
    "date": "Fri Sep 08 2023",
    "value": "72.849"
  },
  {
    "date": "Fri Sep 08 2023",
    "value": "72.849"
  },
  {
    "date": "Fri Sep 08 2023",
    "value": "72.849"
  },
  {
    "date": "Fri Sep 08 2023",
    "value": "72.849"
  },
  {
    "date": "Fri Sep 08 2023",
    "value": "72.849"
  },
  {
    "date": "Fri Sep 08 2023",
    "value": "72.849"
  },
  {
    "date": "Mon Sep 11 2023",
    "value": "73.2693"
  },
  {
    "date": "Mon Sep 11 2023",
    "value": "73.2693"
  },
  {
    "date": "Tue Sep 12 2023",
    "value": "71.3011"
  },
  {
    "date": "Tue Sep 12 2023",
    "value": "71.3011"
  },
  {
    "date": "Wed Sep 13 2023",
    "value": "71.0306"
  },
  {
    "date": "Wed Sep 13 2023",
    "value": "71.0306"
  },
  {
    "date": "Thu Sep 14 2023",
    "value": "72.0853"
  },
  {
    "date": "Thu Sep 14 2023",
    "value": "72.0853"
  },
  {
    "date": "Fri Sep 15 2023",
    "value": "72.3673"
  },
  {
    "date": "Fri Sep 15 2023",
    "value": "72.3673"
  },
  {
    "date": "Fri Sep 15 2023",
    "value": "72.3673"
  },
  {
    "date": "Fri Sep 15 2023",
    "value": "72.3673"
  },
  {
    "date": "Fri Sep 15 2023",
    "value": "72.3673"
  },
  {
    "date": "Fri Sep 15 2023",
    "value": "72.3673"
  },
  {
    "date": "Fri Sep 15 2023",
    "value": "72.3673"
  },
  {
    "date": "Fri Sep 15 2023",
    "value": "72.3673"
  },
  {
    "date": "Mon Sep 18 2023",
    "value": "71.5418"
  },
  {
    "date": "Mon Sep 18 2023",
    "value": "71.5418"
  },
  {
    "date": "Wed Sep 20 2023",
    "value": "70.8279"
  },
  {
    "date": "Wed Sep 20 2023",
    "value": "70.8279"
  },
  {
    "date": "Thu Sep 21 2023",
    "value": "70.0741"
  },
  {
    "date": "Thu Sep 21 2023",
    "value": "70.0741"
  },
  {
    "date": "Fri Sep 22 2023",
    "value": "69.983"
  },
  {
    "date": "Fri Sep 22 2023",
    "value": "69.983"
  },
  {
    "date": "Fri Sep 22 2023",
    "value": "69.983"
  },
  {
    "date": "Fri Sep 22 2023",
    "value": "69.983"
  },
  {
    "date": "Fri Sep 22 2023",
    "value": "69.983"
  },
  {
    "date": "Fri Sep 22 2023",
    "value": "69.983"
  },
  {
    "date": "Mon Sep 25 2023",
    "value": "69.9759"
  },
  {
    "date": "Mon Sep 25 2023",
    "value": "69.9759"
  },
  {
    "date": "Tue Sep 26 2023",
    "value": "70.214"
  },
  {
    "date": "Tue Sep 26 2023",
    "value": "70.214"
  },
  {
    "date": "Wed Sep 27 2023",
    "value": "70.5513"
  },
  {
    "date": "Wed Sep 27 2023",
    "value": "70.5513"
  },
  {
    "date": "Wed Oct 04 2023",
    "value": "69.7298"
  },
  {
    "date": "Wed Oct 04 2023",
    "value": "69.7298"
  },
  {
    "date": "Thu Oct 05 2023",
    "value": "70.465"
  },
  {
    "date": "Thu Oct 05 2023",
    "value": "70.465"
  },
  {
    "date": "Fri Oct 06 2023",
    "value": "70.3421"
  },
  {
    "date": "Fri Oct 06 2023",
    "value": "70.3421"
  },
  {
    "date": "Fri Oct 06 2023",
    "value": "70.3421"
  },
  {
    "date": "Fri Oct 06 2023",
    "value": "70.3421"
  },
  {
    "date": "Fri Oct 06 2023",
    "value": "70.3421"
  },
  {
    "date": "Fri Oct 06 2023",
    "value": "70.3421"
  },
  {
    "date": "Mon Oct 09 2023",
    "value": "69.5404"
  },
  {
    "date": "Mon Oct 09 2023",
    "value": "69.5404"
  },
  {
    "date": "Tue Oct 10 2023",
    "value": "70.824"
  },
  {
    "date": "Tue Oct 10 2023",
    "value": "70.824"
  },
  {
    "date": "Wed Oct 11 2023",
    "value": "71.55"
  },
  {
    "date": "Wed Oct 11 2023",
    "value": "71.55"
  },
  {
    "date": "Thu Oct 12 2023",
    "value": "71.4443"
  },
  {
    "date": "Thu Oct 12 2023",
    "value": "71.4443"
  },
  {
    "date": "Fri Oct 13 2023",
    "value": "71.3649"
  },
  {
    "date": "Fri Oct 13 2023",
    "value": "71.3649"
  },
  {
    "date": "Fri Oct 13 2023",
    "value": "71.3649"
  },
  {
    "date": "Fri Oct 13 2023",
    "value": "71.3649"
  },
  {
    "date": "Fri Oct 13 2023",
    "value": "71.3649"
  },
  {
    "date": "Fri Oct 13 2023",
    "value": "71.3649"
  },
  {
    "date": "Mon Oct 16 2023",
    "value": "71.5455"
  },
  {
    "date": "Mon Oct 16 2023",
    "value": "71.5455"
  },
  {
    "date": "Tue Oct 17 2023",
    "value": "71.4741"
  },
  {
    "date": "Tue Oct 17 2023",
    "value": "71.4741"
  },
  {
    "date": "Wed Oct 18 2023",
    "value": "71.0094"
  },
  {
    "date": "Wed Oct 18 2023",
    "value": "71.0094"
  },
  {
    "date": "Thu Oct 19 2023",
    "value": "70.7427"
  },
  {
    "date": "Thu Oct 19 2023",
    "value": "70.7427"
  },
  {
    "date": "Fri Oct 20 2023",
    "value": "70.6169"
  },
  {
    "date": "Fri Oct 20 2023",
    "value": "70.6169"
  },
  {
    "date": "Fri Oct 20 2023",
    "value": "70.6169"
  },
  {
    "date": "Fri Oct 20 2023",
    "value": "70.6169"
  },
  {
    "date": "Fri Oct 20 2023",
    "value": "70.6169"
  },
  {
    "date": "Fri Oct 20 2023",
    "value": "70.6169"
  },
  {
    "date": "Mon Oct 23 2023",
    "value": "68.9968"
  },
  {
    "date": "Mon Oct 23 2023",
    "value": "68.9968"
  },
  {
    "date": "Mon Oct 23 2023",
    "value": "68.9968"
  },
  {
    "date": "Mon Oct 23 2023",
    "value": "68.9968"
  },
  {
    "date": "Wed Oct 25 2023",
    "value": "68.8229"
  },
  {
    "date": "Wed Oct 25 2023",
    "value": "68.8229"
  },
  {
    "date": "Thu Oct 26 2023",
    "value": "68.4337"
  },
  {
    "date": "Thu Oct 26 2023",
    "value": "68.4337"
  },
  {
    "date": "Fri Oct 27 2023",
    "value": "69.5797"
  },
  {
    "date": "Fri Oct 27 2023",
    "value": "69.5797"
  },
  {
    "date": "Fri Oct 27 2023",
    "value": "69.5797"
  },
  {
    "date": "Fri Oct 27 2023",
    "value": "69.5797"
  },
  {
    "date": "Fri Oct 27 2023",
    "value": "69.5797"
  },
  {
    "date": "Fri Oct 27 2023",
    "value": "69.5797"
  },
  {
    "date": "Mon Oct 30 2023",
    "value": "69.706"
  },
  {
    "date": "Mon Oct 30 2023",
    "value": "69.706"
  },
  {
    "date": "Tue Oct 31 2023",
    "value": "69.755"
  },
  {
    "date": "Tue Oct 31 2023",
    "value": "69.755"
  },
  {
    "date": "Wed Nov 01 2023",
    "value": "69.5528"
  },
  {
    "date": "Wed Nov 01 2023",
    "value": "69.5528"
  },
  {
    "date": "Thu Nov 02 2023",
    "value": "70.2537"
  },
  {
    "date": "Thu Nov 02 2023",
    "value": "70.2537"
  },
  {
    "date": "Fri Nov 03 2023",
    "value": "70.9914"
  },
  {
    "date": "Fri Nov 03 2023",
    "value": "70.9914"
  },
  {
    "date": "Fri Nov 03 2023",
    "value": "70.9914"
  },
  {
    "date": "Fri Nov 03 2023",
    "value": "70.9914"
  },
  {
    "date": "Fri Nov 03 2023",
    "value": "70.9914"
  },
  {
    "date": "Fri Nov 03 2023",
    "value": "70.9914"
  },
  {
    "date": "Mon Nov 06 2023",
    "value": "72.005"
  },
  {
    "date": "Mon Nov 06 2023",
    "value": "72.005"
  },
  {
    "date": "Tue Nov 07 2023",
    "value": "71.8778"
  },
  {
    "date": "Tue Nov 07 2023",
    "value": "71.8778"
  },
  {
    "date": "Wed Nov 08 2023",
    "value": "72.6919"
  },
  {
    "date": "Wed Nov 08 2023",
    "value": "72.6919"
  },
  {
    "date": "Thu Nov 09 2023",
    "value": "72.5523"
  },
  {
    "date": "Thu Nov 09 2023",
    "value": "72.5523"
  },
  {
    "date": "Fri Nov 10 2023",
    "value": "72.9558"
  },
  {
    "date": "Fri Nov 10 2023",
    "value": "72.9558"
  },
  {
    "date": "Fri Nov 10 2023",
    "value": "72.9558"
  },
  {
    "date": "Fri Nov 10 2023",
    "value": "72.9558"
  },
  {
    "date": "Fri Nov 10 2023",
    "value": "72.9558"
  },
  {
    "date": "Fri Nov 10 2023",
    "value": "72.9558"
  },
  {
    "date": "Mon Nov 13 2023",
    "value": "72.9802"
  },
  {
    "date": "Mon Nov 13 2023",
    "value": "72.9802"
  },
  {
    "date": "Mon Nov 13 2023",
    "value": "72.9802"
  },
  {
    "date": "Mon Nov 13 2023",
    "value": "72.9802"
  },
  {
    "date": "Wed Nov 15 2023",
    "value": "73.7"
  },
  {
    "date": "Wed Nov 15 2023",
    "value": "73.7"
  },
  {
    "date": "Thu Nov 16 2023",
    "value": "75.0181"
  },
  {
    "date": "Thu Nov 16 2023",
    "value": "75.0181"
  },
  {
    "date": "Fri Nov 17 2023",
    "value": "74.5617"
  },
  {
    "date": "Fri Nov 17 2023",
    "value": "74.5617"
  },
  {
    "date": "Fri Nov 17 2023",
    "value": "74.5617"
  },
  {
    "date": "Fri Nov 17 2023",
    "value": "74.5617"
  },
  {
    "date": "Fri Nov 17 2023",
    "value": "74.5617"
  },
  {
    "date": "Fri Nov 17 2023",
    "value": "74.5617"
  },
  {
    "date": "Mon Nov 20 2023",
    "value": "74.3487"
  },
  {
    "date": "Mon Nov 20 2023",
    "value": "74.3487"
  },
  {
    "date": "Tue Nov 21 2023",
    "value": "73.9644"
  },
  {
    "date": "Tue Nov 21 2023",
    "value": "73.9644"
  },
  {
    "date": "Wed Nov 22 2023",
    "value": "74.9605"
  },
  {
    "date": "Wed Nov 22 2023",
    "value": "74.9605"
  },
  {
    "date": "Thu Nov 23 2023",
    "value": "74.6539"
  },
  {
    "date": "Thu Nov 23 2023",
    "value": "74.6539"
  },
  {
    "date": "Fri Nov 24 2023",
    "value": "74.7135"
  },
  {
    "date": "Fri Nov 24 2023",
    "value": "74.7135"
  },
  {
    "date": "Fri Nov 24 2023",
    "value": "74.7135"
  },
  {
    "date": "Fri Nov 24 2023",
    "value": "74.7135"
  },
  {
    "date": "Fri Nov 24 2023",
    "value": "74.7135"
  },
  {
    "date": "Fri Nov 24 2023",
    "value": "74.7135"
  },
  {
    "date": "Fri Nov 24 2023",
    "value": "74.7135"
  },
  {
    "date": "Fri Nov 24 2023",
    "value": "74.7135"
  },
  {
    "date": "Tue Nov 28 2023",
    "value": "74.7937"
  },
  {
    "date": "Tue Nov 28 2023",
    "value": "74.7937"
  },
  {
    "date": "Wed Nov 29 2023",
    "value": "75.307"
  },
  {
    "date": "Wed Nov 29 2023",
    "value": "75.307"
  },
  {
    "date": "Thu Nov 30 2023",
    "value": "76.295"
  },
  {
    "date": "Thu Nov 30 2023",
    "value": "76.295"
  },
  {
    "date": "Fri Dec 01 2023",
    "value": "76.4115"
  },
  {
    "date": "Fri Dec 01 2023",
    "value": "76.4115"
  },
  {
    "date": "Fri Dec 01 2023",
    "value": "76.4115"
  },
  {
    "date": "Fri Dec 01 2023",
    "value": "76.4115"
  },
  {
    "date": "Fri Dec 01 2023",
    "value": "76.4115"
  },
  {
    "date": "Fri Dec 01 2023",
    "value": "76.4115"
  },
  {
    "date": "Mon Dec 04 2023",
    "value": "77.2863"
  },
  {
    "date": "Mon Dec 04 2023",
    "value": "77.2863"
  },
  {
    "date": "Tue Dec 05 2023",
    "value": "77.3881"
  },
  {
    "date": "Tue Dec 05 2023",
    "value": "77.3881"
  },
  {
    "date": "Wed Dec 06 2023",
    "value": "77.4102"
  },
  {
    "date": "Wed Dec 06 2023",
    "value": "77.4102"
  },
  {
    "date": "Fri Dec 08 2023",
    "value": "78.4677"
  },
  {
    "date": "Fri Dec 08 2023",
    "value": "78.4677"
  },
  {
    "date": "Fri Dec 08 2023",
    "value": "78.4677"
  },
  {
    "date": "Fri Dec 08 2023",
    "value": "78.4677"
  },
  {
    "date": "Fri Dec 08 2023",
    "value": "78.4677"
  },
  {
    "date": "Fri Dec 08 2023",
    "value": "78.4677"
  },
  {
    "date": "Mon Dec 11 2023",
    "value": "79.1684"
  },
  {
    "date": "Mon Dec 11 2023",
    "value": "79.1684"
  },
  {
    "date": "Tue Dec 12 2023",
    "value": "78.3501"
  },
  {
    "date": "Tue Dec 12 2023",
    "value": "78.3501"
  },
  {
    "date": "Wed Dec 13 2023",
    "value": "78.8814"
  },
  {
    "date": "Wed Dec 13 2023",
    "value": "78.8814"
  },
  {
    "date": "Thu Dec 14 2023",
    "value": "80.2107"
  },
  {
    "date": "Thu Dec 14 2023",
    "value": "80.2107"
  },
  {
    "date": "Thu Dec 14 2023",
    "value": "80.2107"
  },
  {
    "date": "Thu Dec 14 2023",
    "value": "80.2107"
  },
  {
    "date": "Thu Dec 14 2023",
    "value": "80.2107"
  },
  {
    "date": "Thu Dec 14 2023",
    "value": "80.2107"
  },
  {
    "date": "Thu Dec 14 2023",
    "value": "80.2107"
  },
  {
    "date": "Thu Dec 14 2023",
    "value": "80.2107"
  },
  {
    "date": "Fri Dec 15 2023",
    "value": "80.4779"
  },
  {
    "date": "Fri Dec 15 2023",
    "value": "80.4779"
  },
  {
    "date": "Wed Dec 20 2023",
    "value": "78.4532"
  },
  {
    "date": "Wed Dec 20 2023",
    "value": "78.4532"
  },
  {
    "date": "Thu Dec 21 2023",
    "value": "79.3487"
  },
  {
    "date": "Thu Dec 21 2023",
    "value": "79.3487"
  },
  {
    "date": "Fri Dec 22 2023",
    "value": "80.6157"
  },
  {
    "date": "Fri Dec 22 2023",
    "value": "80.6157"
  },
  {
    "date": "Fri Dec 22 2023",
    "value": "80.6157"
  },
  {
    "date": "Fri Dec 22 2023",
    "value": "80.6157"
  },
  {
    "date": "Fri Dec 22 2023",
    "value": "80.6157"
  },
  {
    "date": "Fri Dec 22 2023",
    "value": "80.6157"
  },
  {
    "date": "Fri Dec 22 2023",
    "value": "80.6157"
  },
  {
    "date": "Fri Dec 22 2023",
    "value": "80.6157"
  },
  {
    "date": "Tue Dec 26 2023",
    "value": "80.5872"
  },
  {
    "date": "Tue Dec 26 2023",
    "value": "80.5872"
  },
  {
    "date": "Wed Dec 27 2023",
    "value": "80.8982"
  },
  {
    "date": "Wed Dec 27 2023",
    "value": "80.8982"
  },
  {
    "date": "Thu Dec 28 2023",
    "value": "80.3695"
  },
  {
    "date": "Thu Dec 28 2023",
    "value": "80.3695"
  },
  {
    "date": "Fri Dec 29 2023",
    "value": "80.7478"
  },
  {
    "date": "Fri Dec 29 2023",
    "value": "80.7478"
  },
  {
    "date": "Fri Dec 29 2023",
    "value": "80.7478"
  },
  {
    "date": "Fri Dec 29 2023",
    "value": "80.7478"
  },
  {
    "date": "Fri Dec 29 2023",
    "value": "80.7478"
  },
  {
    "date": "Fri Dec 29 2023",
    "value": "80.7478"
  },
  {
    "date": "Mon Jan 01 2024",
    "value": "80.5585"
  },
  {
    "date": "Mon Jan 01 2024",
    "value": "80.5585"
  },
  {
    "date": "Tue Jan 02 2024",
    "value": "80.4266"
  },
  {
    "date": "Tue Jan 02 2024",
    "value": "80.4266"
  },
  {
    "date": "Wed Jan 03 2024",
    "value": "80.365"
  },
  {
    "date": "Wed Jan 03 2024",
    "value": "80.365"
  },
  {
    "date": "Thu Jan 04 2024",
    "value": "81.7243"
  },
  {
    "date": "Thu Jan 04 2024",
    "value": "81.7243"
  },
  {
    "date": "Fri Jan 05 2024",
    "value": "82.5324"
  },
  {
    "date": "Fri Jan 05 2024",
    "value": "82.5324"
  },
  {
    "date": "Fri Jan 05 2024",
    "value": "82.5324"
  },
  {
    "date": "Fri Jan 05 2024",
    "value": "82.5324"
  },
  {
    "date": "Fri Jan 05 2024",
    "value": "82.5324"
  },
  {
    "date": "Fri Jan 05 2024",
    "value": "82.5324"
  },
  {
    "date": "Mon Jan 08 2024",
    "value": "82.0618"
  },
  {
    "date": "Mon Jan 08 2024",
    "value": "82.0618"
  },
  {
    "date": "Tue Jan 09 2024",
    "value": "82.4485"
  },
  {
    "date": "Tue Jan 09 2024",
    "value": "82.4485"
  },
  {
    "date": "Wed Jan 10 2024",
    "value": "82.9273"
  },
  {
    "date": "Wed Jan 10 2024",
    "value": "82.9273"
  },
  {
    "date": "Thu Jan 11 2024",
    "value": "83.8976"
  },
  {
    "date": "Thu Jan 11 2024",
    "value": "83.8976"
  },
  {
    "date": "Fri Jan 12 2024",
    "value": "84.6173"
  },
  {
    "date": "Fri Jan 12 2024",
    "value": "84.6173"
  },
  {
    "date": "Fri Jan 12 2024",
    "value": "84.6173"
  },
  {
    "date": "Fri Jan 12 2024",
    "value": "84.6173"
  },
  {
    "date": "Fri Jan 12 2024",
    "value": "84.6173"
  },
  {
    "date": "Fri Jan 12 2024",
    "value": "84.6173"
  },
  {
    "date": "Mon Jan 15 2024",
    "value": "84.8483"
  },
  {
    "date": "Mon Jan 15 2024",
    "value": "84.8483"
  },
  {
    "date": "Tue Jan 16 2024",
    "value": "83.7389"
  },
  {
    "date": "Tue Jan 16 2024",
    "value": "83.7389"
  },
  {
    "date": "Wed Jan 17 2024",
    "value": "82.8737"
  },
  {
    "date": "Wed Jan 17 2024",
    "value": "82.8737"
  },
  {
    "date": "Thu Jan 18 2024",
    "value": "82.6793"
  },
  {
    "date": "Thu Jan 18 2024",
    "value": "82.6793"
  },
  {
    "date": "Fri Jan 19 2024",
    "value": "83.3624"
  },
  {
    "date": "Fri Jan 19 2024",
    "value": "83.3624"
  },
  {
    "date": "Fri Jan 19 2024",
    "value": "83.3624"
  },
  {
    "date": "Fri Jan 19 2024",
    "value": "83.3624"
  },
  {
    "date": "Fri Jan 19 2024",
    "value": "83.3624"
  },
  {
    "date": "Fri Jan 19 2024",
    "value": "83.3624"
  },
  {
    "date": "Fri Jan 19 2024",
    "value": "83.3624"
  },
  {
    "date": "Fri Jan 19 2024",
    "value": "83.3624"
  },
  {
    "date": "Tue Jan 23 2024",
    "value": "81.8012"
  },
  {
    "date": "Tue Jan 23 2024",
    "value": "81.8012"
  },
  {
    "date": "Wed Jan 24 2024",
    "value": "83.389"
  },
  {
    "date": "Wed Jan 24 2024",
    "value": "83.389"
  },
  {
    "date": "Thu Jan 25 2024",
    "value": "82.4476"
  },
  {
    "date": "Thu Jan 25 2024",
    "value": "82.4476"
  },
  {
    "date": "Thu Jan 25 2024",
    "value": "82.4476"
  },
  {
    "date": "Thu Jan 25 2024",
    "value": "82.4476"
  },
  {
    "date": "Thu Jan 25 2024",
    "value": "82.4476"
  },
  {
    "date": "Thu Jan 25 2024",
    "value": "82.4476"
  },
  {
    "date": "Thu Jan 25 2024",
    "value": "82.4476"
  },
  {
    "date": "Thu Jan 25 2024",
    "value": "82.4476"
  },
  {
    "date": "Mon Jan 29 2024",
    "value": "83.4034"
  },
  {
    "date": "Mon Jan 29 2024",
    "value": "83.4034"
  },
  {
    "date": "Tue Jan 30 2024",
    "value": "82.6455"
  },
  {
    "date": "Tue Jan 30 2024",
    "value": "82.6455"
  },
  {
    "date": "Wed Jan 31 2024",
    "value": "83.5958"
  },
  {
    "date": "Wed Jan 31 2024",
    "value": "83.5958"
  },
  {
    "date": "Thu Feb 01 2024",
    "value": "82.7053"
  },
  {
    "date": "Thu Feb 01 2024",
    "value": "82.7053"
  },
  {
    "date": "Thu Feb 01 2024",
    "value": "82.7053"
  },
  {
    "date": "Thu Feb 01 2024",
    "value": "82.7053"
  },
  {
    "date": "Thu Feb 01 2024",
    "value": "82.7053"
  },
  {
    "date": "Fri Feb 02 2024",
    "value": "83.0593"
  },
  {
    "date": "Fri Feb 02 2024",
    "value": "83.0593"
  },
  {
    "date": "Fri Feb 02 2024",
    "value": "83.0593"
  },
  {
    "date": "Mon Feb 05 2024",
    "value": "83.6445"
  },
  {
    "date": "Tue Feb 06 2024",
    "value": "83.8482"
  },
  {
    "date": "Wed Feb 07 2024",
    "value": "83.7003"
  },
  {
    "date": "Thu Feb 08 2024",
    "value": "83.5864"
  },
  {
    "date": "Fri Feb 09 2024",
    "value": "83.9586"
  },
  {
    "date": "Fri Feb 09 2024",
    "value": "83.9586"
  },
  {
    "date": "Fri Feb 09 2024",
    "value": "83.9586"
  },
  {
    "date": "Mon Feb 12 2024",
    "value": "84.2722"
  },
  {
    "date": "Tue Feb 13 2024",
    "value": "84.0146"
  },
  {
    "date": "Wed Feb 14 2024",
    "value": "83.7461"
  },
  {
    "date": "Thu Feb 15 2024",
    "value": "85.242"
  },
  {
    "date": "Fri Feb 16 2024",
    "value": "86.0319"
  },
  {
    "date": "Fri Feb 16 2024",
    "value": "86.0319"
  },
  {
    "date": "Fri Feb 16 2024",
    "value": "86.0319"
  },
  {
    "date": "Mon Feb 19 2024",
    "value": "85.8689"
  },
  {
    "date": "Tue Feb 20 2024",
    "value": "85.925"
  },
  {
    "date": "Tue Feb 20 2024",
    "value": "85.925"
  },
  {
    "date": "Thu Feb 22 2024",
    "value": "86.7565"
  },
  {
    "date": "Fri Feb 23 2024",
    "value": "88.0573"
  },
  {
    "date": "Fri Feb 23 2024",
    "value": "88.0573"
  },
  {
    "date": "Fri Feb 23 2024",
    "value": "88.0573"
  },
  {
    "date": "Mon Feb 26 2024",
    "value": "87.2732"
  },
  {
    "date": "Tue Feb 27 2024",
    "value": "86.7097"
  },
  {
    "date": "Wed Feb 28 2024",
    "value": "85.8777"
  },
  {
    "date": "Thu Feb 29 2024",
    "value": "86.6142"
  },
  {
    "date": "Fri Mar 01 2024",
    "value": "87.633"
  },
  {
    "date": "Fri Mar 01 2024",
    "value": "87.633"
  },
  {
    "date": "Fri Mar 01 2024",
    "value": "87.633"
  },
  {
    "date": "Mon Mar 04 2024",
    "value": "87.7718"
  },
  {
    "date": "Tue Mar 05 2024",
    "value": "86.9313"
  },
  {
    "date": "Wed Mar 06 2024",
    "value": "87.2227"
  },
  {
    "date": "Thu Mar 07 2024",
    "value": "87.2242"
  },
  {
    "date": "Thu Mar 07 2024",
    "value": "87.2242"
  },
  {
    "date": "Mon Mar 11 2024",
    "value": "87.5021"
  },
  {
    "date": "Tue Mar 12 2024",
    "value": "87.0848"
  },
  {
    "date": "Wed Mar 13 2024",
    "value": "84.806"
  },
  {
    "date": "Thu Mar 14 2024",
    "value": "85.6576"
  },
  {
    "date": "Fri Mar 15 2024",
    "value": "85.7001"
  },
  {
    "date": "Fri Mar 15 2024",
    "value": "85.7001"
  },
  {
    "date": "Fri Mar 15 2024",
    "value": "85.7001"
  },
  {
    "date": "Mon Mar 18 2024",
    "value": "84.9246"
  },
  {
    "date": "Tue Mar 19 2024",
    "value": "84.3507"
  },
  {
    "date": "Wed Mar 20 2024",
    "value": "84.6398"
  },
  {
    "date": "Thu Mar 21 2024",
    "value": "86.4093"
  },
  {
    "date": "Fri Mar 22 2024",
    "value": "86.7578"
  },
  {
    "date": "Fri Mar 22 2024",
    "value": "86.7578"
  },
  {
    "date": "Fri Mar 22 2024",
    "value": "86.7578"
  },
  {
    "date": "Fri Mar 22 2024",
    "value": "86.7578"
  },
  {
    "date": "Tue Mar 26 2024",
    "value": "88.2037"
  },
  {
    "date": "Wed Mar 27 2024",
    "value": "89.3081"
  },
  {
    "date": "Thu Mar 28 2024",
    "value": "89.5409"
  },
  {
    "date": "Thu Mar 28 2024",
    "value": "89.5409"
  },
  {
    "date": "Sun Mar 31 2024",
    "value": "89.5363"
  },
  {
    "date": "Sun Mar 31 2024",
    "value": "89.5363"
  },
  {
    "date": "Mon Apr 01 2024",
    "value": "90.4594"
  },
  {
    "date": "Tue Apr 02 2024",
    "value": "91.1259"
  },
  {
    "date": "Wed Apr 03 2024",
    "value": "91.2201"
  },
  {
    "date": "Thu Apr 04 2024",
    "value": "91.6668"
  },
  {
    "date": "Fri Apr 05 2024",
    "value": "92.203"
  },
  {
    "date": "Fri Apr 05 2024",
    "value": "92.203"
  },
  {
    "date": "Fri Apr 05 2024",
    "value": "92.203"
  },
  {
    "date": "Mon Apr 08 2024",
    "value": "92.0232"
  },
  {
    "date": "Tue Apr 09 2024",
    "value": "91.8124"
  },
  {
    "date": "Wed Apr 10 2024",
    "value": "92.3031"
  },
  {
    "date": "Wed Apr 10 2024",
    "value": "92.3031"
  },
  {
    "date": "Fri Apr 12 2024",
    "value": "91.9458"
  },
  {
    "date": "Fri Apr 12 2024",
    "value": "91.9458"
  },
  {
    "date": "Fri Apr 12 2024",
    "value": "91.9458"
  },
  {
    "date": "Mon Apr 15 2024",
    "value": "90.6234"
  },
  {
    "date": "Tue Apr 16 2024",
    "value": "90.4811"
  },
  {
    "date": "Tue Apr 16 2024",
    "value": "90.4811"
  },
  {
    "date": "Thu Apr 18 2024",
    "value": "91.7245"
  },
  {
    "date": "Fri Apr 19 2024",
    "value": "91.4808"
  },
  {
    "date": "Wed Apr 24 2024",
    "value": "92.7696"
  },
  {
    "date": "Thu Apr 25 2024",
    "value": "93.1817"
  },
  {
    "date": "Fri Apr 26 2024",
    "value": "93.8893"
  },
  {
    "date": "Fri Apr 26 2024",
    "value": "93.8893"
  },
  {
    "date": "Fri Apr 26 2024",
    "value": "93.8893"
  },
  {
    "date": "Mon Apr 29 2024",
    "value": "93.8166"
  },
  {
    "date": "Tue Apr 30 2024",
    "value": "93.8393"
  },
  {
    "date": "Tue Apr 30 2024",
    "value": "93.8393"
  },
  {
    "date": "Thu May 02 2024",
    "value": "94.0845"
  },
  {
    "date": "Fri May 03 2024",
    "value": "93.5275"
  },
  {
    "date": "Fri May 03 2024",
    "value": "93.5275"
  },
  {
    "date": "Fri May 03 2024",
    "value": "93.5275"
  },
  {
    "date": "Mon May 06 2024",
    "value": "93.7222"
  },
  {
    "date": "Tue May 07 2024",
    "value": "91.9179"
  },
  {
    "date": "Wed May 08 2024",
    "value": "92.4906"
  },
  {
    "date": "Thu May 09 2024",
    "value": "91.1985"
  },
  {
    "date": "Fri May 10 2024",
    "value": "92.6792"
  },
  {
    "date": "Fri May 10 2024",
    "value": "92.6792"
  },
  {
    "date": "Fri May 10 2024",
    "value": "92.6792"
  },
  {
    "date": "Mon May 13 2024",
    "value": "92.0134"
  },
  {
    "date": "Tue May 14 2024",
    "value": "92.4509"
  },
  {
    "date": "Wed May 15 2024",
    "value": "93.5762"
  },
  {
    "date": "Thu May 16 2024",
    "value": "94.4063"
  },
  {
    "date": "Fri May 17 2024",
    "value": "94.8758"
  },
  {
    "date": "Fri May 17 2024",
    "value": "94.8758"
  },
  {
    "date": "Fri May 17 2024",
    "value": "94.8758"
  },
  {
    "date": "Fri May 17 2024",
    "value": "94.8758"
  },
  {
    "date": "Tue May 21 2024",
    "value": "95.2898"
  },
  {
    "date": "Wed May 22 2024",
    "value": "95.2047"
  },
  {
    "date": "Thu May 23 2024",
    "value": "96.5067"
  },
  {
    "date": "Fri May 24 2024",
    "value": "96.8286"
  },
  {
    "date": "Fri May 24 2024",
    "value": "96.8286"
  },
  {
    "date": "Fri May 24 2024",
    "value": "96.8286"
  },
  {
    "date": "Mon May 27 2024",
    "value": "97.3567"
  },
  {
    "date": "Tue May 28 2024",
    "value": "96.1492"
  },
  {
    "date": "Tue May 28 2024",
    "value": "96.1492"
  },
  {
    "date": "Thu May 30 2024",
    "value": "94.4334"
  },
  {
    "date": "Fri May 31 2024",
    "value": "94.3394"
  },
  {
    "date": "Mon Jun 03 2024",
    "value": "96.8676"
  },
  {
    "date": "Tue Jun 04 2024",
    "value": "91.7403"
  },
  {
    "date": "Wed Jun 05 2024",
    "value": "96.4969"
  },
  {
    "date": "Thu Jun 06 2024",
    "value": "98.3736"
  },
  {
    "date": "Fri Jun 07 2024",
    "value": "100.2283"
  },
  {
    "date": "Fri Jun 07 2024",
    "value": "100.2283"
  },
  {
    "date": "Fri Jun 07 2024",
    "value": "100.2283"
  },
  {
    "date": "Mon Jun 10 2024",
    "value": "99.8564"
  },
  {
    "date": "Tue Jun 11 2024",
    "value": "100.693"
  },
  {
    "date": "Wed Jun 12 2024",
    "value": "101.427"
  },
  {
    "date": "Thu Jun 13 2024",
    "value": "102.3538"
  },
  {
    "date": "Fri Jun 14 2024",
    "value": "103.6312"
  },
  {
    "date": "Fri Jun 14 2024",
    "value": "103.6312"
  },
  {
    "date": "Fri Jun 14 2024",
    "value": "103.6312"
  },
  {
    "date": "Fri Jun 14 2024",
    "value": "103.6312"
  },
  {
    "date": "Tue Jun 18 2024",
    "value": "105.3224"
  },
  {
    "date": "Wed Jun 19 2024",
    "value": "105.003"
  },
  {
    "date": "Thu Jun 20 2024",
    "value": "105.7835"
  },
  {
    "date": "Fri Jun 21 2024",
    "value": "105.7044"
  },
  {
    "date": "Fri Jun 21 2024",
    "value": "105.7044"
  },
  {
    "date": "Fri Jun 21 2024",
    "value": "105.7044"
  },
  {
    "date": "Mon Jun 24 2024",
    "value": "106.528"
  },
  {
    "date": "Tue Jun 25 2024",
    "value": "106.0844"
  },
  {
    "date": "Wed Jun 26 2024",
    "value": "106.4275"
  },
  {
    "date": "Thu Jun 27 2024",
    "value": "107.2606"
  },
  {
    "date": "Fri Jun 28 2024",
    "value": "108.3059"
  },
  {
    "date": "Fri Jun 28 2024",
    "value": "108.3059"
  },
  {
    "date": "Mon Jul 01 2024",
    "value": "108.9425"
  },
  {
    "date": "Tue Jul 02 2024",
    "value": "108.3576"
  },
  {
    "date": "Wed Jul 03 2024",
    "value": "109.1831"
  },
  {
    "date": "Thu Jul 04 2024",
    "value": "110.0889"
  },
  {
    "date": "Fri Jul 05 2024",
    "value": "109.9868"
  },
  {
    "date": "Fri Jul 05 2024",
    "value": "109.9868"
  },
  {
    "date": "Fri Jul 05 2024",
    "value": "109.9868"
  },
  {
    "date": "Mon Jul 08 2024",
    "value": "109.1962"
  },
  {
    "date": "Tue Jul 09 2024",
    "value": "110.01"
  },
  {
    "date": "Wed Jul 10 2024",
    "value": "109.6456"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Fri Jul 12 2024",
    "value": "110.5486"
  },
  {
    "date": "Mon Jul 15 2024",
    "value": "111.4935"
  },
  {
    "date": "Mon Jul 15 2024",
    "value": "111.4935"
  },
  {
    "date": "Mon Jul 15 2024",
    "value": "111.4935"
  },
  {
    "date": "Tue Jul 16 2024",
    "value": "111.3654"
  },
  {
    "date": "Tue Jul 16 2024",
    "value": "111.3654"
  },
  {
    "date": "Thu Jul 18 2024",
    "value": "110.8484"
  },
  {
    "date": "Fri Jul 19 2024",
    "value": "109.3516"
  },
  {
    "date": "Fri Jul 19 2024",
    "value": "109.3516"
  },
  {
    "date": "Fri Jul 19 2024",
    "value": "109.3516"
  },
  {
    "date": "Mon Jul 22 2024",
    "value": "110.2404"
  },
  {
    "date": "Tue Jul 23 2024",
    "value": "110.1841"
  },
  {
    "date": "Wed Jul 24 2024",
    "value": "111.5795"
  },
  {
    "date": "Fri Jul 26 2024",
    "value": "112.0848"
  },
  {
    "date": "Fri Jul 26 2024",
    "value": "112.0848"
  },
  {
    "date": "Fri Jul 26 2024",
    "value": "112.0848"
  },
  {
    "date": "Mon Jul 29 2024",
    "value": "112.7516"
  },
  {
    "date": "Tue Jul 30 2024",
    "value": "113.2948"
  },
  {
    "date": "Tue Jul 30 2024",
    "value": "113.2948"
  },
  {
    "date": "Tue Jul 30 2024",
    "value": "113.2948"
  },
  {
    "date": "Fri Aug 02 2024",
    "value": "112.6871"
  },
  {
    "date": "Fri Aug 02 2024",
    "value": "112.6871"
  },
  {
    "date": "Fri Aug 02 2024",
    "value": "112.6871"
  },
  {
    "date": "Mon Aug 05 2024",
    "value": "109.6588"
  },
  {
    "date": "Tue Aug 06 2024",
    "value": "109.0789"
  },
  {
    "date": "Wed Aug 07 2024",
    "value": "111.8366"
  },
  {
    "date": "Thu Aug 08 2024",
    "value": "110.8434"
  },
  {
    "date": "Fri Aug 09 2024",
    "value": "111.5287"
  },
  {
    "date": "Fri Aug 09 2024",
    "value": "111.5287"
  },
  {
    "date": "Fri Aug 09 2024",
    "value": "111.5287"
  },
  {
    "date": "Mon Aug 12 2024",
    "value": "111.7162"
  },
  {
    "date": "Tue Aug 13 2024",
    "value": "111.0638"
  },
  {
    "date": "Wed Aug 14 2024",
    "value": "111.1058"
  },
  {
    "date": "Wed Aug 14 2024",
    "value": "111.1058"
  },
  {
    "date": "Fri Aug 16 2024",
    "value": "112.9577"
  },
  {
    "date": "Fri Aug 16 2024",
    "value": "112.9577"
  },
  {
    "date": "Fri Aug 16 2024",
    "value": "112.9577"
  },
  {
    "date": "Mon Aug 19 2024",
    "value": "113.0323"
  },
  {
    "date": "Tue Aug 20 2024",
    "value": "113.933"
  },
  {
    "date": "Wed Aug 21 2024",
    "value": "113.8159"
  },
  {
    "date": "Thu Aug 22 2024",
    "value": "115.2269"
  },
  {
    "date": "Fri Aug 23 2024",
    "value": "114.5717"
  },
  {
    "date": "Fri Aug 23 2024",
    "value": "114.5717"
  },
  {
    "date": "Mon Aug 26 2024",
    "value": "115.5107"
  },
  {
    "date": "Tue Aug 27 2024",
    "value": "115.5461"
  },
  {
    "date": "Wed Aug 28 2024",
    "value": "115.8234"
  },
  {
    "date": "Thu Aug 29 2024",
    "value": "115.6528"
  },
  {
    "date": "Fri Aug 30 2024",
    "value": "115.7794"
  },
  {
    "date": "Fri Aug 30 2024",
    "value": "115.7794"
  },
  {
    "date": "Fri Aug 30 2024",
    "value": "115.7794"
  },
  {
    "date": "Mon Sep 02 2024",
    "value": "116.7086"
  },
  {
    "date": "Tue Sep 03 2024",
    "value": "117.5945"
  },
  {
    "date": "Wed Sep 04 2024",
    "value": "117.295"
  },
  {
    "date": "Thu Sep 05 2024",
    "value": "117.5232"
  },
  {
    "date": "Thu Sep 05 2024",
    "value": "117.5232"
  },
  {
    "date": "Fri Sep 06 2024",
    "value": "116.9189"
  },
  {
    "date": "Fri Sep 06 2024",
    "value": "116.9189"
  },
  {
    "date": "Mon Sep 09 2024",
    "value": "116.9651"
  },
  {
    "date": "Tue Sep 10 2024",
    "value": "118.425"
  },
  {
    "date": "Wed Sep 11 2024",
    "value": "118.7015"
  },
  {
    "date": "Thu Sep 12 2024",
    "value": "120.3927"
  },
  {
    "date": "Fri Sep 13 2024",
    "value": "121.2525"
  },
  {
    "date": "Fri Sep 13 2024",
    "value": "121.2525"
  },
  {
    "date": "Fri Sep 13 2024",
    "value": "121.2525"
  },
  {
    "date": "Mon Sep 16 2024",
    "value": "120.5796"
  },
  {
    "date": "Tue Sep 17 2024",
    "value": "121.0211"
  },
  {
    "date": "Wed Sep 18 2024",
    "value": "119.814"
  },
  {
    "date": "Thu Sep 19 2024",
    "value": "120.1424"
  },
  {
    "date": "Fri Sep 20 2024",
    "value": "122.0142"
  },
  {
    "date": "Fri Sep 20 2024",
    "value": "122.0142"
  },
  {
    "date": "Fri Sep 20 2024",
    "value": "122.0142"
  },
  {
    "date": "Mon Sep 23 2024",
    "value": "122.77"
  },
  {
    "date": "Tue Sep 24 2024",
    "value": "123.023"
  },
  {
    "date": "Wed Sep 25 2024",
    "value": "122.0565"
  },
  {
    "date": "Thu Sep 26 2024",
    "value": "121.3097"
  },
  {
    "date": "Fri Sep 27 2024",
    "value": "122.2456"
  },
  {
    "date": "Fri Sep 27 2024",
    "value": "122.2456"
  },
  {
    "date": "Fri Sep 27 2024",
    "value": "122.2456"
  },
  {
    "date": "Mon Sep 30 2024",
    "value": "122.2439"
  },
  {
    "date": "Tue Oct 01 2024",
    "value": "123.5642"
  },
  {
    "date": "Tue Oct 01 2024",
    "value": "123.5642"
  },
  {
    "date": "Thu Oct 03 2024",
    "value": "121.6732"
  },
  {
    "date": "Fri Oct 04 2024",
    "value": "120.3268"
  },
  {
    "date": "Fri Oct 04 2024",
    "value": "120.3268"
  },
  {
    "date": "Fri Oct 04 2024",
    "value": "120.3268"
  },
  {
    "date": "Mon Oct 07 2024",
    "value": "119.5349"
  },
  {
    "date": "Tue Oct 08 2024",
    "value": "121.9266"
  },
  {
    "date": "Wed Oct 09 2024",
    "value": "123.029"
  },
  {
    "date": "Fri Oct 11 2024",
    "value": "123.3947"
  },
  {
    "date": "Fri Oct 11 2024",
    "value": "123.3947"
  },
  {
    "date": "Fri Oct 11 2024",
    "value": "123.3947"
  },
  {
    "date": "Mon Oct 14 2024",
    "value": "124.2855"
  },
  {
    "date": "Tue Oct 15 2024",
    "value": "124.8265"
  },
  {
    "date": "Wed Oct 16 2024",
    "value": "124.1254"
  },
  {
    "date": "Thu Oct 17 2024",
    "value": "122.6573"
  },
  {
    "date": "Fri Oct 18 2024",
    "value": "122.286"
  },
  {
    "date": "Fri Oct 18 2024",
    "value": "122.286"
  },
  {
    "date": "Fri Oct 18 2024",
    "value": "122.286"
  },
  {
    "date": "Mon Oct 21 2024",
    "value": "119.9712"
  },
  {
    "date": "Tue Oct 22 2024",
    "value": "117.5065"
  },
  {
    "date": "Thu Oct 24 2024",
    "value": "119.8852"
  },
  {
    "date": "Fri Oct 25 2024",
    "value": "118.2414"
  },
  {
    "date": "Fri Oct 25 2024",
    "value": "118.2414"
  },
  {
    "date": "Fri Oct 25 2024",
    "value": "118.2414"
  },
  {
    "date": "Mon Oct 28 2024",
    "value": "118.389"
  },
  {
    "date": "Tue Oct 29 2024",
    "value": "118.8961"
  },
  {
    "date": "Wed Oct 30 2024",
    "value": "118.0773"
  },
  {
    "date": "Thu Oct 31 2024",
    "value": "117.1484"
  },
  {
    "date": "Thu Oct 31 2024",
    "value": "117.1484"
  },
  {
    "date": "Thu Oct 31 2024",
    "value": "117.1484"
  },
  {
    "date": "Thu Oct 31 2024",
    "value": "117.1484"
  },
  {
    "date": "Mon Nov 04 2024",
    "value": "117.0743"
  },
  {
    "date": "Tue Nov 05 2024",
    "value": "117.6457"
  },
  {
    "date": "Wed Nov 06 2024",
    "value": "121.6309"
  },
  {
    "date": "Thu Nov 07 2024",
    "value": "120.9932"
  },
  {
    "date": "Fri Nov 08 2024",
    "value": "120.102"
  },
  {
    "date": "Fri Nov 08 2024",
    "value": "120.102"
  },
  {
    "date": "Fri Nov 08 2024",
    "value": "120.102"
  },
  {
    "date": "Mon Nov 11 2024",
    "value": "119.3653"
  },
  {
    "date": "Tue Nov 12 2024",
    "value": "118.2997"
  },
  {
    "date": "Wed Nov 13 2024",
    "value": "115.3906"
  },
  {
    "date": "Thu Nov 14 2024",
    "value": "116.4242"
  },
  {
    "date": "Thu Nov 14 2024",
    "value": "116.4242"
  },
  {
    "date": "Thu Nov 14 2024",
    "value": "116.4242"
  },
  {
    "date": "Thu Nov 14 2024",
    "value": "116.4242"
  },
  {
    "date": "Mon Nov 18 2024",
    "value": "116.8032"
  },
  {
    "date": "Tue Nov 19 2024",
    "value": "118.6176"
  },
  {
    "date": "Tue Nov 19 2024",
    "value": "118.6176"
  },
  {
    "date": "Thu Nov 21 2024",
    "value": "118.4472"
  },
  {
    "date": "Fri Nov 22 2024",
    "value": "119.6543"
  },
  {
    "date": "Fri Nov 22 2024",
    "value": "119.6543"
  },
  {
    "date": "Fri Nov 22 2024",
    "value": "119.6543"
  },
  {
    "date": "Mon Nov 25 2024",
    "value": "120.9484"
  },
  {
    "date": "Tue Nov 26 2024",
    "value": "120.9355"
  },
  {
    "date": "Wed Nov 27 2024",
    "value": "121.9319"
  },
  {
    "date": "Thu Nov 28 2024",
    "value": "121.6274"
  },
  {
    "date": "Fri Nov 29 2024",
    "value": "123.4589"
  },
  {
    "date": "Fri Nov 29 2024",
    "value": "123.4589"
  },
  {
    "date": "Fri Nov 29 2024",
    "value": "123.4589"
  },
  {
    "date": "Mon Dec 02 2024",
    "value": "124.5802"
  },
  {
    "date": "Tue Dec 03 2024",
    "value": "125.356"
  },
  {
    "date": "Wed Dec 04 2024",
    "value": "125.9493"
  },
  {
    "date": "Fri Dec 06 2024",
    "value": "127.8939"
  },
  {
    "date": "Fri Dec 06 2024",
    "value": "127.8939"
  },
  {
    "date": "Fri Dec 06 2024",
    "value": "127.8939"
  },
  {
    "date": "Mon Dec 09 2024",
    "value": "128.9426"
  },
  {
    "date": "Tue Dec 10 2024",
    "value": "128.8684"
  },
  {
    "date": "Wed Dec 11 2024",
    "value": "129.2426"
  },
  {
    "date": "Thu Dec 12 2024",
    "value": "129.2088"
  },
  {
    "date": "Fri Dec 13 2024",
    "value": "129.7116"
  },
  {
    "date": "Fri Dec 13 2024",
    "value": "129.7116"
  },
  {
    "date": "Fri Dec 13 2024",
    "value": "129.7116"
  },
  {
    "date": "Mon Dec 16 2024",
    "value": "130.6636"
  },
  {
    "date": "Tue Dec 17 2024",
    "value": "130.3184"
  },
  {
    "date": "Wed Dec 18 2024",
    "value": "130.0843"
  },
  {
    "date": "Thu Dec 19 2024",
    "value": "129.5741"
  },
  {
    "date": "Fri Dec 20 2024",
    "value": "125.6279"
  },
  {
    "date": "Fri Dec 20 2024",
    "value": "125.6279"
  },
  {
    "date": "Fri Dec 20 2024",
    "value": "125.6279"
  },
  {
    "date": "Mon Dec 23 2024",
    "value": "125.8446"
  },
  {
    "date": "Tue Dec 24 2024",
    "value": "125.7462"
  },
  {
    "date": "Tue Dec 24 2024",
    "value": "125.7462"
  },
  {
    "date": "Thu Dec 26 2024",
    "value": "126.6868"
  },
  {
    "date": "Fri Dec 27 2024",
    "value": "126.764"
  },
  {
    "date": "Fri Dec 27 2024",
    "value": "126.764"
  },
  {
    "date": "Fri Dec 27 2024",
    "value": "126.764"
  },
  {
    "date": "Mon Dec 30 2024",
    "value": "128.5415"
  },
  {
    "date": "Tue Dec 31 2024",
    "value": "128.2707"
  },
  {
    "date": "Wed Jan 01 2025",
    "value": "128.5781"
  },
  {
    "date": "Fri Jan 03 2025",
    "value": "129.1344"
  },
  {
    "date": "Fri Jan 03 2025",
    "value": "129.1344"
  },
  {
    "date": "Fri Jan 03 2025",
    "value": "129.1344"
  },
  {
    "date": "Mon Jan 06 2025",
    "value": "126.0377"
  },
  {
    "date": "Tue Jan 07 2025",
    "value": "126.384"
  },
  {
    "date": "Wed Jan 08 2025",
    "value": "124.3721"
  },
  {
    "date": "Thu Jan 09 2025",
    "value": "122.4917"
  },
  {
    "date": "Fri Jan 10 2025",
    "value": "120.4056"
  },
  {
    "date": "Wed Jan 15 2025",
    "value": "115.5921"
  },
  {
    "date": "Thu Jan 16 2025",
    "value": "115.6429"
  },
  {
    "date": "Fri Jan 17 2025",
    "value": "114.9436"
  },
  {
    "date": "Fri Jan 17 2025",
    "value": "114.9436"
  },
  {
    "date": "Fri Jan 17 2025",
    "value": "114.9436"
  },
  {
    "date": "Mon Jan 20 2025",
    "value": "115.5917"
  },
  {
    "date": "Tue Jan 21 2025",
    "value": "110.743"
  },
  {
    "date": "Wed Jan 22 2025",
    "value": "108.8533"
  },
  {
    "date": "Thu Jan 23 2025",
    "value": "112.5885"
  },
  {
    "date": "Fri Jan 24 2025",
    "value": "110.7465"
  },
  {
    "date": "Fri Jan 24 2025",
    "value": "110.7465"
  },
  {
    "date": "Fri Jan 24 2025",
    "value": "110.7465"
  },
  {
    "date": "Mon Jan 27 2025",
    "value": "107.8414"
  },
  {
    "date": "Tue Jan 28 2025",
    "value": "106.8138"
  },
  {
    "date": "Wed Jan 29 2025",
    "value": "109.3362"
  },
  {
    "date": "Fri Jan 31 2025",
    "value": "109.6511"
  },
  {
    "date": "Fri Jan 31 2025",
    "value": "109.6511"
  },
  {
    "date": "Fri Jan 31 2025",
    "value": "109.6511"
  },
  {
    "date": "Mon Feb 03 2025",
    "value": "110.135"
  },
  {
    "date": "Tue Feb 04 2025",
    "value": "111.4672"
  },
  {
    "date": "Wed Feb 05 2025",
    "value": "111.8037"
  },
  {
    "date": "Thu Feb 06 2025",
    "value": "110.2476"
  },
  {
    "date": "Fri Feb 07 2025",
    "value": "111.1066"
  },
  {
    "date": "Fri Feb 07 2025",
    "value": "111.1066"
  },
  {
    "date": "Fri Feb 07 2025",
    "value": "111.1066"
  },
  {
    "date": "Mon Feb 10 2025",
    "value": "108.7687"
  },
  {
    "date": "Tue Feb 11 2025",
    "value": "107.0499"
  },
  {
    "date": "Wed Feb 12 2025",
    "value": "106.3666"
  },
  {
    "date": "Thu Feb 13 2025",
    "value": "106.3078"
  },
  {
    "date": "Fri Feb 14 2025",
    "value": "104.6052"
  },
  {
    "date": "Fri Feb 14 2025",
    "value": "104.6052"
  },
  {
    "date": "Fri Feb 14 2025",
    "value": "104.6052"
  },
  {
    "date": "Mon Feb 17 2025",
    "value": "104.652"
  },
  {
    "date": "Tue Feb 18 2025",
    "value": "104.7465"
  },
  {
    "date": "Wed Feb 19 2025",
    "value": "105.557"
  },
  {
    "date": "Thu Feb 20 2025",
    "value": "106.4199"
  },
  {
    "date": "Thu Feb 20 2025",
    "value": "106.4199"
  }
])

let xDates = []
let yValues = []
let minDate, minValue, maxDate, maxValue
state.forEach(e => {
  xDates.push(new Date(e.date).getTime())
  yValues.push(e.value)
})
let canvasWidth = 800
let canvasHeight = 500
minDate = Math.min(...xDates)
minValue = Math.min(...yValues)
maxDate = Math.max(...xDates)
maxValue = Math.max(...yValues)

let xDatesScaled = xDates.map(e=>((e - minDate)/(maxDate - minDate))*canvasWidth)
let yValuesScaled = yValues.map(e=> ((e - minValue)/(maxValue - minValue))*canvasHeight)
let valuesString = xDates.map((e,i)=>xDatesScaled[i] + "," +yValuesScaled[i]).join(" ")

</script>

<template>
  <div style="padding-top: 50px;">
    <svg :height="canvasWidth" :width="canvasHeight" xmlns="http://www.w3.org/2000/svg">
    <polyline :points="valuesString" style="fill:none;stroke:green;stroke-width:1" />
    Sorry, your browser does not support inline SVG.
  </svg>
  </div>

</template>

<style>
</style>
