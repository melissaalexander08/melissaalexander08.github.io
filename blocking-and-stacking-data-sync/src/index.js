miro.onReady(() => {
  const icon24 =
  '<path d="M12.3,0.9v11.9H0.9v10.3h22.5V0.9H12.3z M1.9,22.1v-2.3h0.8v-0.5H1.9v-2.5h0.8v-0.5H1.9v-2.5h11.4v0h0.8v-0.5h-0.8v-2.5 h0.8v-0.5h-0.8V7.6h0.8V7.1h-0.8V4.6h0.8V4.1h-0.8V1.9h9.1v2.3h-0.8v0.5h0.8v2.5h-0.8v0.5h0.8v2.6h-0.8v0.5h0.8v2.5h-0.8v0.5h0.8   v2.6h-0.8v0.5h0.8v2.5h-0.8v0.5h0.8v2.3H1.9z"/><rect x="14.6" y="4.1" width="1.9" height=".5"/><rect x="16.9" y="4.1" width="1.9" height=".5"/><rect x="19.3" y="4.1" width="1.9" height=".5"/><rect x="16.9" y="7.1" width="1.9" height=".5"/><rect x="14.6" y="7.1" width="1.9" height=".5"/><rect x="19.3" y="7.1" width="1.9" height=".5"/><rect x="16.9" y="10.3" width="1.9" height=".5"/><rect x="14.6" y="10.3" width="1.9" height=".5"/><rect x="19.3" y="10.3" width="1.9" height=".5"/><rect x="14.6" y="13.3" width="1.9" height=".5"/><rect x="19.3" y="13.3" width="1.9" height=".5"/><rect x="16.9" y="13.3" width="1.9" height=".5"/><rect x="5.8" y="16.3" width="2.1" height=".5"/><rect x="11.1" y="16.3" width="2.1" height=".5"/><rect x="3.2" y="16.3" width="2.1" height=".5"/><rect x="8.5" y="16.3" width="2.1" height=".5"/><rect x="13.7" y="16.3" width="2.1" height=".5"/><rect x="16.4" y="16.3" width="2.1" height=".5"/><rect x="19" y="16.3" width="2.1" height=".5"/><rect x="5.8" y="19.3" width="2.1" height=".5"/><rect x="3.2" y="19.3" width="2.1" height=".5"/><rect x="13.7" y="19.3" width="2.1" height=".5"/><rect x="8.5" y="19.3" width="2.1" height=".5"/><rect x="19" y="19.3" width="2.1" height=".5"/><rect x="11.1" y="19.3" width="2.1" height=".5"/><rect x="16.4" y="19.3" width="2.1" height=".5"/><polygon points="4 8 5 8 5 5.2 7.8 5.2 7.8 4.2 5 4.2 5 1.4 4 1.4 4 4.2 1.1 4.2 1.1 5.2 4 5.2"/>'
  
  miro.initialize({
    extensionPoints: {
      bottomBar: {
        title: 'NBBJ Stacking',
        svgIcon: icon24,
        onClick: () => {
          miro.board.ui.openLeftSidebar('sidebar.html')
        },
      },
    },
  })
})
